import express from "express"
import cors from "cors"
import {
  recuperarAvaliacaoAcimaDaNota,
  recuperarMediaVinhosPais,
  recuperarQuantidadeAvaliacoes,
  recuperarUsuariosSemAvaliacoes,
  recuperarVinhosAvaliadosPorUsuariosExperientes
} from "./repository/query.repository.js"
// import { authRouter, transactionRouter } from "./routers"
// import authRouter from './Routers/authRoutes.js'
// import transactionsRouters from "./Routers/transactionsRoutes.js"

const app = express()
app
  .use(cors())
  .use(express.json())
  // .use("/auth",authRouter)


app.get("/", async (req, res) => {
  try { 
    res.send("Hellow word")
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

app.get("/vinhosNota", async (req, res) => {
  try {
    // const { nota, pag } = req.body  
    const vinhos = await recuperarAvaliacaoAcimaDaNota();
    
    res.send(vinhos)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

app.get("/usuariosSemAvaliacao", async (req, res) => {
  try {
    const usuarios = await recuperarUsuariosSemAvaliacoes();
    
    res.send(usuarios)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

app.get("/mediaPais", async (req, res) => {
  try {
    const media = await recuperarMediaVinhosPais();
    
    res.send(media)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

app.get("/qtdAvaliacao", async (req, res) => {
  try {
    const qtdAv = await recuperarQuantidadeAvaliacoes();
    
    res.send(qtdAv)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

app.get("/vinhosAvaliados", async (req, res) => {
  try {
    const vinhos = await recuperarVinhosAvaliadosPorUsuariosExperientes();
    
    res.send(vinhos)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));