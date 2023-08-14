const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Standard App');
});

app.listen(port, () => {
  console.log(`Second app listening at http://localhost:${port}`);
});
