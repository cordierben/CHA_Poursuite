/****************************************EXPRESS**************************************/

const express=require('express')
const app=express()
const port=4000

app.use(express.json());

/**************************************CROSS-ORIGIN**********************************/

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain)

/***************************************Modules**************************************/

const Converter = require('./utils/convertJSON.js');
var XLSX = require('xlsx');

/******************************************ROUTES*************************************/

app.get('/',(req,res)=>{
    console.log('Hello World')
})

app.get('/questions',(req,res)=>{
    let workbook=XLSX.readFile('./data/questions.xlsx')
    const convert = new Converter
    convert.convertToJSON(workbook,function(data) {
        res.send(data)
    })
})

app.post('/user',(req,res)=>{
    let workbook=XLSX.readFile('./data/joueurs.xlsx')
    
})

/******************************************LISTEN*************************************/

app.listen(port, () => {
    console.log(`CHA Pursuit app listening at http://localhost:${port}`)
  })