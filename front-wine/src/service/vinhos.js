import axios from 'axios'

const url = 'http://localhost:5000'


export async function buscarVinhos(vinhoNome){
  const path = vinhoNome ? `/${vinhoNome}` : ''
  const vinho = await axios.get(`${url}/vinhosPorNome${path}`)
  return vinho.data
}

export async function buscarUmVinho(id){
  const vinho = await axios.get(`${url}/vinho/${id}`)
  return vinho.data
}


export async function enviar(body){
  const vinho = await axios.post(`${url}/vinho`, body)
  return vinho.data
}


