const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, respond) => {
  respond.send(`
  Congratulations Arvind! You succesfully created http-server. 
  Now go to the route localhost:3000/findSum`);
});

app.get("/findSum", (req, res) => {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  res.send(`lets find the sum of any two numbers ${sumResult(a, b)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//function to find sum
var sumResult = (x, y) => {
  return x + y;
};
