import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';
// import { restoreMocks } from '../ds-bst/jest.config.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json(), errorMiddleware);

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName } = req.body;
    if (firstName === undefined) {
      throw new ClientError(400, 'cannot add to database');
    }
    const { lastName } = req.body;
    if (lastName === undefined) {
      throw new ClientError(400, 'cannot add to database');
    }
    const jason = `
    insert into "actors" ("firstName", "lastName")
      values ($1, $2)
      returning *;
    `;
    const params = [firstName, lastName];
    const result = await db.query(jason, params);
    const newActor = result.rows[0];
    res.status(201).json(newActor);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    if (firstName === undefined) {
      throw new ClientError(400, 'cannot add firstName');
    }
    if (lastName === undefined) {
      throw new ClientError(400, 'cannot add lastName');
    }
    const { actorId } = req.params;
    if (actorId === undefined && Number.isInteger(+actorId)) {
      throw new ClientError(404, 'actorId is not found');
    }
    const sql = `
    update "actors"
    set "firstName" = $1,
        "lastName" = $2
    where "actorId" = $3
    returning *;
    `;
    const params = [firstName, lastName, actorId];
    const results = await db.query(sql, params);
    const freshActor = results.rows[0];
    res.status(200).json(freshActor);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (actorId === undefined && Number.isInteger(+actorId)) {
      throw new ClientError(404, 'actorId is not found');
    }
    const sql = `
  delete
    from "actors"
    where "actorId" = $1
    returning *;
  `;
    const params = [actorId];
    const results = await db.query(sql, params);
    const lostActor = results.rows[0];
    if (!lostActor) {
      throw new ClientError(404, 'lostActor not found');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
