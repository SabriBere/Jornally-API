import express from 'express'
import cors from 'cors'
//llamado a las rutas
//llamado a swagger para documetación de end points
//middleware para cuando no encuentra una ruta
//configurar morgan para más info


const server = express()
server.use(express.json())
server.use(cors()) //modo wildcard

// server.use("/src", routes)

const port = 8000
async function startServer(){
    server.listen(port, () => {
        console.log("Server running on port:", port)
        console.log("API version:", process.env.npm_package_version)
        console.log("🌐 Entorno:", 'ninguno de momento');
    })
}

startServer()