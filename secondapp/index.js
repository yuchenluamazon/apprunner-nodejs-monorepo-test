const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Second App');
});

app.listen(port, () => {
  console.log(`Second app listening at http://localhost:${port}`);
});
