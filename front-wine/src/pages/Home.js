
import {Button} from "@mui/material"
import Header from "../components/Header"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Home () {
  const navigate = useNavigate()
  return (
    <>
      <Header/>
      <StyleBody>
        <StyledDivButton><Button onClick={()=>navigate('/vinhosNota')} style={{color:'black'}}>Filtrar Vinhos Acima de 60</Button></StyledDivButton>
        <StyledDivButton><Button onClick={()=>navigate('/quantidadeAvaliacoes')} style={{color:'black'}}>Filtrar quantidade de avaliações por vinho</Button></StyledDivButton>
        <StyledDivButton><Button onClick={()=>navigate('/media')}style={{color:'black'}}>Recuperar media de paises</Button></StyledDivButton>
        <StyledDivButton><Button onClick={()=>navigate('/usuariosSemAvaliacao')} style={{color:'black'}}>Recuperar usuarios sem avaliações</Button></StyledDivButton>
        <StyledDivButton><Button onClick={()=>navigate('/vinhosMaiorNota')} style={{color:'black'}}>Recuperar vinhos com uma nota maior que a média do país</Button></StyledDivButton>
        <StyledDivButton><Button onClick={()=>navigate('/vinhosBemAvaliados')} style={{color:'black'}}>Recuperar vinhos avaliados por usuarios experientes</Button></StyledDivButton>
      </StyleBody>
    </>
  )
}


export const StyleBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: 70px;
  justify-content: space-around;
  align-items: center;
`

const StyledDivButton = styled.div`
  height: 100px;
  width: 170px;
  border-radius: 10%;
  background-color: #D3D3D3;
  display: flex;
  justify-content: center;
  align-items: center;
`

