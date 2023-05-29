require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();


app.use(express.static(path.join(__dirname, process.env.ABSOLUTE_STATIC_PATH)));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, process.env.ABSOLUTE_STATIC_PATH, 'index.html'));
})



const PORT = process.env.PORT || 4555;

app.listen(PORT, (err) => {
  if (err) { console.log(err); }
  console.info(`==> 🌎 app listening on http://localhost:${PORT}.`);
});