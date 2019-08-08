const express = require("express");
const app = express();

app.use(express.json());

 
app.get ('/',(req,res)=>{
    res.send(names)
})
app.post('/names', (req, res) => {
    
    names.push(req.body);
    res.json(names);
  });
  
  app.delete('/names/title/:id', (req, res) => {
    let id = parseInt(req.params.id);
    names.map(elem => {
      if(elem.id === id) {
          delete elem.title;
      }
      return elem;
    });
    res.json(names);
  });
  
    

const PORT = 1009;
app.listen(PORT, () => console.log(` server is listening to ${PORT}`));

const names = [
    {
      id: 1,
      title: "omaiam",
      isCompleted: false
    },
    {
      id: 2,
      title: "hyaa",
      isComplete :false
    },
    {
      id: 3,
      title: "doha",
      isCompleted: false
    },
    {
      id: 4,
      title: "hala",
      isCompleted: false}
  ]