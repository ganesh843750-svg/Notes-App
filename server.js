import express from 'express'
import mongoose  from 'mongoose'
import dbconnection from './config/connectdb.js'
import { notedata, createnote, deletenote, getNote, updateNote } from './controllers/dboperation.js'

const app = express()
dbconnection();

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', async ( req, resp)=>{
    const data = await notedata();
    console.log(data)
    resp.render('home',{ notes : data})
})

app.get('/form', (req, resp) =>{
    resp.render('form')
})

app.post('/createnote', async (req,resp)=>{
    let { title, content } = req.body;
    const result = await createnote(title, content);
    resp.send(result)
})

app.delete('/deletenote/:id', async (req, resp)=>{
    const id = req.params.id;
    const result = await deletenote(id);
    resp.send(result)
})

app.get('/getData/:id', async (req, resp)=>{
    const id = req.params.id
    const note = await getNote(id)
    resp.render('update', { note })

})

app.put('/updatenote/:id', async (req, resp)=>{
    const id = req.params.id
    let { title, content} = req.body
    const result = await updateNote(id, title, content)
    resp.send(result)
})

app.get('/display/:id', async ( req, resp)=>{
    const id = req.params.id
    const note = await getNote(id)
    resp.render('display', { note })
})



app.listen(3000)