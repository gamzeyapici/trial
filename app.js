const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// app.get('/', function(req, res){
//     res.send('listening..');
// });



app.use(express.static(path.resolve(`${__dirname}`)));

app.get('/', (req, res) => res.sendFile(path.resolve(`${__dirname}/index.html`)));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))