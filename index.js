import { request, response } from "express";
import express from 'express';
import mongoose from "mongoose";
import User from "./models/user.js";

const app = express()
app.use(express.json())

app.get('/users', async (request, response) => {

    const users = await User.find()

    return response.status(200).json(users)
})

app.post('/users', async (request, response) => {

    const user = request.body

    const newUser = await User.create(user)

    return response.status(201).json(newUser)
})


mongoose.connect("mongodb+srv://alessandro:93oY3G5lAVdtZ5Bx@cluster0.7uinhdl.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Banco de dados conectado!"))
    .catch(() => console.log("Não conectou"))
    
app.listen(3000)