const express =require('express');
const app = express();
const Router = require('./src/routes/routes');
const PORT = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));


app.use('/',Router);


app.listen(PORT,()=>{
    console.log('listening at port 8000');
});
