const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
})

app.get('/api/task', (req, res) => {
    console.log(req.query)
    if (req.query.value== 'Kitchen'){
        res.send([{Nom:"Washing the dishes"},{Nom:"Cleaning the ground"},{Nom:"Buying Food" }])
    }
    if (req.query.value== 'Bedroom'){
        res.send([{Nom:"Cleaning the bedroom"},{Nom:"Cleaning the ground"},{Nom:"clean up one's stuff" }])
    }
    if (req.query.value== 'Outside'){
        res.send([{Nom:"Taking out the trash"},{Nom:"To mow the lawn"},{Nom:"Water the plants" }])
    }
    if (req.query.value== 'Clear'){
        res.send([{Nom:""},{Nom:""},{Nom:"" }])
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})