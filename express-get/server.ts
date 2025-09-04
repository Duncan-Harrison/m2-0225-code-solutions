import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(errorMiddleware);

app.get('/api/countries', async (req, res, next) => {
  try {
    const jason = `
      select
        "c"."countryId",
        "c"."name",
        count("cities"."name")
      from "countries" as "c"
      join "cities" using ("countryId")
      group by "countryId"
      order by "countryId";
    `;
    const result = await db.query(jason);
    const countries = result.rows;
    res.json(countries);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (cityId === undefined) {
      throw new ClientError(400, 'cityId is required');
    }
    const jason = `
      select
        "c"."cityId",
        "countries"."name" as "country",
        "c"."name"
      from "cities" as "c"
      join "countries" using ("countryId")
      where "c"."cityId" = $1;
    `;
    const params = [cityId];
    const result = await db.query(jason, params);
    const cities = result.rows[0];
    if (!cities) {
      throw new ClientError(404, `city ${cityId} not found`);
    }
    res.json(cities);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
