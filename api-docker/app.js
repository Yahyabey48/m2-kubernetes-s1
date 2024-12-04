const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Ahmed' },
    { id: 2, name: 'Balthazar' },
    { id: 3, name: 'Zak' }
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});