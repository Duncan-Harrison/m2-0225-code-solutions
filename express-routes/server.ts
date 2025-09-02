import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date());
  next();
});

app.get('/', function (req, res) {
  res.send('GET request to Homepage');
});

app.get('/notes/', function (req, res) {
  res.send('GET request to all notes');
});

app.post('/notes/:noteId/', function (req, res) {
  const { noteId } = req.params;
  res.send(`POST request to ${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
