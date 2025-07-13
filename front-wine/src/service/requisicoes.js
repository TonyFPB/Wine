import axios from 'axios'

const url = 'http://localhost:5000'


export async function notaVinhoMaior60() {
  const vinho = await axios.get(`${url}/vinhosNota`, {nota: 80})
  return vinho.data
}

export async function usuarioSemAvaliacoes() {
  const usuario = await axios.get(`${url}/usuariosSemAvaliacao`)
  return usuario.data
}

export async function mediaPais() {
  const mediaPais = await axios.get(`${url}/mediaPais`)
  return mediaPais.data
}


export async function qtdAvaliacao() {
  const qtdAvaliacao = await axios.get(`${url}/qtdAvaliacao`)
  return qtdAvaliacao.data
}


export async function vinhosMaiorNota() {
  const vinho = await axios.get(`${url}/vinhosMaiorNota`)
  return vinho.data
}

export async function vinhosAvaliados() {
  const vinho = await axios.get(`${url}/vinhosMaiorNota`)
  return vinho.data
}

