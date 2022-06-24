
const express = require('express');
const app = express();
const port = 5000
// to get the data
    app.get("/metrics", (req, res) => {
      let object = req.query.object;
      let metric = req.query.metric;
      let radius = req.query.radius;
      let side = req.query.side;
      let area = 0;
      let volume= 0;

      //area of circle
if(object == "circle"){
area = (3.14 * radius * radius) ;
res.send(`The area of ${object} is ${area}`);
}

//area of square
else if(object == "square"){
  area = side*side;
  res.send(`The area of ${object} is ${area}`);
}

//area of sphere
else if(object == "sphere"){
  volume = (4.19 * radius * radius * radius);
  res.send(`The volume of ${object} is ${volume}`);
}
    else(!object)
    {
      res.send("Not an object");
    }  
      });

app.listen(port, ()=>{
  console.log("The server is running on port 5000...")
})