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
const ConverterXLS = require('./utils/convertXLS.js');
var XLSX = require('xlsx');
const fs = require('fs');
var json2xls = require('json2xls');


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
    console.log('ok')
    let workbook=XLSX.readFile('./data/joueurs.xlsx')
    const convert = new Converter
    convert.convertToJSON(workbook,function(data) {
        const convertxls = new ConverterXLS
        convertxls.convertToXlsUser(data,req.body.nom,req.body.result,function(datapushed) {
            var xls = json2xls(datapushed);
            fs.writeFileSync('./data/joueurs.xlsx', xls, 'binary', (err) => {
                if (err) {
                        console.log("writeFileSync :", err);
                }
                console.log( "./data/joueurs.xlsx file is saved!");
            });
            res.send(data)
        })
    })

})

app.post('/stats',(req,res)=>{
    let workbook=XLSX.readFile('./data/stats.xlsx')
    const convert = new Converter
    convert.convertToJSON(workbook,function(data) {
        const convertxls = new ConverterXLS
        convertxls.convertToXlsStat(data,req.body.nom,req.body.questions,req.body.result,function(datapushed) {
            var xls = json2xls(datapushed);
            fs.writeFileSync('./data/stats.xlsx', xls, 'binary', (err) => {
                if (err) {
                        console.log("writeFileSync :", err);
                }
                console.log( "./data/stats.xlsx file is saved!");
            });
            res.send(data)
        })
    })

})

/******************************************LISTEN*************************************/

app.listen(port, () => {
    console.log(`CHA Pursuit app listening at http://localhost:${port}`)
  })