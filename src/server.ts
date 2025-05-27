import express from "express";
import cors from "cors";
import morgan from "morgan";
//llamado a las rutas
//llamado a swagger para documetación de end points
//middleware para cuando no encuentra una ruta
//configurar morgan para más info

const server = express();
server.use(express.json());
server.use(cors()); //modo wildcard

// server.use("/src", routes)

const customMorgan =
    ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length]';

server.use(
    morgan(process.env.NODE_ENV === "development" ? "dev" : customMorgan)
);

//luego cuando conecta con la db colocar async/await
function startServer() {
    server.listen(process.env.PORT, () => {
        console.log("Server running on port:", process.env.PORT);
        console.log("API version:", process.env.npm_package_version);
        console.log("Entorno:", process.env.NODE_ENV);
    });
}

startServer();
