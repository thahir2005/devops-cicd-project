const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('this is my first devops cicd project 🚀');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
