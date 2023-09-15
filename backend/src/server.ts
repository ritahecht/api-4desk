import { Pool } from "pg";
import express from "express";
import cors from "cors";
import { SETUsuario } from "../Procedures/SETs/SETUsuario";

const client = new Pool({
    user: "postgres",
    host: "localhost",
    database: "greeneeat",    //trocar para o nome do seu banco local
    password: "2305",      //trocar para a senha do seu banco local
    port: 5432
})

// const cloud = new Pool({ //conexão com o banco do servidor
//     connectionString: "postgres://foucqfeg:V-vXAAIje_4WXTk40Zs73_UCSc9gjInB@silly.db.elephantsql.com/foucqfeg", 
//     ssl: {
//         rejectUnauthorized: false
//     }
// })

const app = express()
app.use(cors())
app.use(express.json())


app.post("/cadastro", async (req, res) => {
    const { usuario } = req.body

    const usuarioID = await SETUsuario(client, usuario)

    if (usuarioID) {
        res.send({msg: "Deu bom.", id: usuarioID})
    } else {
        res.send({msg: "Deu mt ruim"})
    }

})

app.listen(3001, () => {
    console.log("Servidor rodando!")
})