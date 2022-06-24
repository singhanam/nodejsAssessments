
const fs = require('fs');
const express = require('express');
const app = express();
const port = 8080
  fs.readFile('vegitable.json', function(err, data) {
    app.get("/vegitables", (req, res) => {
      res.send(JSON.parse(data));
    })
  });

app.listen(port, ()=>{
})