
import Header from "../components/Header"
import { StyleBody } from "./Home"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Autocomplete, OutlinedInput, TextField } from "@mui/material";
import { buscarUmVinho, buscarVinhos } from "../service/vinhos";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";
import FeedVinho from "./FeedVinho";




export default function Busca() {
  const [busca, setBusca] = useState('')
  const [vinhos, setVinhos] = useState([])
  const [pagVinho, setPagVinho] = useState()


  useEffect(() => {
    async function carregarTodos() {
      const todos = await buscarVinhos('')
      setVinhos(todos)
    }
    carregarTodos()
  }, [])

  async function recuperarVinho(vinhoId) {
    const vinho = await buscarUmVinho(vinhoId)
    setPagVinho(vinho)
  }

  async function autoComplete(nome) {
    const resultados = await buscarVinhos(nome)
    setVinhos(resultados)
    console.log(resultados)
  }

  return (
    <>
      <Header />
      <StyleBody>
        <CampoBusca>
          <FormControl>
            <Autocomplete
              sx={{ width: 400 }}
              freeSolo
              options={vinhos}
              getOptionLabel={(option) => option?.nome || ''}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  {option.nome}
                </li>
              )}
              inputValue={busca}
              onInputChange={(event, newInputValue) => {
                console.log(event.target.value)
                if (newInputValue.length >= 3) {
                  autoComplete(newInputValue)
                }
                setBusca(newInputValue)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Buscar vinho"
                  variant="outlined"
                  fullWidth
                />
              )}
            />

          </FormControl>
          <FaSearch style={{ margin: '10px 0 0 0' }} size="25px" onClick={() => {
            if (vinhos?.length > 0) {
              recuperarVinho(vinhos[0].vinho_id)
            } else {
              console.warn("Nenhum vinho encontrado para buscar.");
            }
          }} />
        </CampoBusca>
        <FeedVinho vinho={pagVinho?.vinho} avaliacoes={pagVinho?.avaliacoes} recuperarVinho={recuperarVinho} />
      </StyleBody>
    </>
  )
}


const CampoBusca = styled.div`
  display: flex;
  width: 500px;
  align-self: center;
  justify-content: space-around;

`