const {obtenerPosts,agregarPosts} = require('./consulta')

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json());

app.listen(3000, console.log("Servidor Encendido 3000"))

app.get("/posts", async (req,res)=>{
    const viajes = await obtenerPosts()
    res.json(viajes)
})

app.post("/posts", async (req,res)=>{
    const {titulo,url,descripcion,like} = req.body
    await agregarPosts(titulo,url,descripcion,like)
    res.send("Viaje agregado con exito")
})