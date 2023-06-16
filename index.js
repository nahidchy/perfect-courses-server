const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors');
const courses=require('./courses.json');
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses', (req, res) => {
  res.send(courses)
})
app.get('/video/:id', (req, res) => {
  const id = req.params.id;
  const setVedio= courses.courses.find(n=>n.id==id);
  res.send(setVedio);
})

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const details= courses.courses.find(n=>n.id==id);
  res.send(details);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})