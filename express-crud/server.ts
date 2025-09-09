import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select
      "gradeId",
      "name",
      "course",
      "score",
      "createdAt"
    from "grades";
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    if (grades.length <= 0) throw new ClientError(500, 'cannot find grades');
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (gradeId === undefined && Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Cannot find ${gradeId} in database`);
    }
    const sql = `
    select
      "gradeId",
      "name",
      "course",
      "score",
      "createdAt"
    from "grades"
    where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grades = result.rows[0];
    if (!grades) throw new ClientError(404, 'cannot find grades in database');
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (name === undefined || course === undefined) {
      throw new ClientError(400, `Name or course is missing`);
    }
    if (score === undefined && Number.isInteger(+score)) {
      throw new ClientError(400, `Score is either missing or not an integer`);
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grades = result.rows[0];
    if (!grades) throw new ClientError(404, 'cannot find grades');
    res.status(201).json(grades);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (gradeId === undefined && Number.isInteger(+gradeId)) {
      throw new ClientError(400, `gradeId is missing or must be an integer`);
    }
    const { name, course, score } = req.body;
    if (name === undefined) {
      throw new ClientError(400, `Name is missing`);
    }
    if (course === undefined) {
      throw new ClientError(400, `Course is missing`);
    }
    if (score === undefined && Number.isInteger(+score)) {
      throw new ClientError(400, `Score is either missing or not an integer`);
    }
    const sql = `
      update "grades"
      set "score" = $4,
          "name" = $2,
          "course" = $3
      where "gradeId" = $1
      returning *;
    `;
    const params = [gradeId, name, course, score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    if (!newGrade) throw new ClientError(404, `Cannot find grade in database.`);
    res.status(200).json(newGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (gradeId === undefined && Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId is not found');
    }
    const sql = `
  delete
    from "grades"
    where "gradeId" = $1
    returning *;
  `;
    const params = [gradeId];
    const results = await db.query(sql, params);
    const lostGrade = results.rows[0];
    if (!lostGrade) {
      throw new ClientError(404, 'The grade does not exist in table');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
