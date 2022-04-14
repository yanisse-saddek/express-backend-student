const express = require('express')
const app = express()
const cors = require('cors')
let bodyParser = require('body-parser');
// const engine = require('express-handlebars').engine
// app.engine('handlebars', engine())
// app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
const students = ["alex","ismail"]

app.get('/students', (req, res)=>{
    res.json(students)
})
app.post('/students', (req, res)=>{ 
    var name = Object.keys(req.body)[0]
    console.log(name)
    if(!students.includes(name)){
        students.push(name)  
        res.status(200).send({
            data:'salut'
        });        
    }else{
        console.log('ca amrche pas!!')
        res.status(400).send({
            data:"eh non! l'utilisateur "+name+" existe deja"
        })
    }
})
app.listen(5000)