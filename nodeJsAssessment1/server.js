
const express = require('express');
let { AgeFromDate} = require('age-calculator');
const app = express();
const port = 5000

    app.get("/age", (req, res) => {
      let year = req.query.year;
      let month = req.query.month;
      let date = req.query.date;
      let personName = req.query.name;
      let ageFromDate = new AgeFromDate(new Date(year, month, date)).age;
  console.log("value from AgeFromDate", ageFromDate);

      res.send(`<p>Hello ${req.query.name}</p> <p>You are currently ${ageFromDate} years old.</p>`);
      });

app.listen(port, ()=>{
  console.log("The server is running on port 5000...")
})