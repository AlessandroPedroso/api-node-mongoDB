import { request, response } from "express";
import express from 'express';

const app = express()
app.use(express.json())

const users = []

app.get('/users', (request,response) =>{

    return response.json(users)
})

app.post('/users', (request,response) =>{
    
    // const name = request.body.name
    // const age = request.body.age

    const {name,age} = request.body

    users.push({name,age})

    // console.log(request)
    // console.log(request.body)

    return response.json({name,age})
})



app.listen(3000)