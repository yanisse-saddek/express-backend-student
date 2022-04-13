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
    students.push(name)    
    res.redirect('back');
})
app.listen(5000)