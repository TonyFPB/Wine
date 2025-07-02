import Header from "../components/Header"
import {StyleBody} from "./Vinhos"
import styled from "styled-components"
import { usuarioSemAvaliacoes } from "../service/requisicoes"
import { useEffect, useState } from "react"
import { Card, CardActionArea, CardContent, Typography } from "@mui/material"

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    usuarioSemAvaliacoes().then(res => setUsuarios(res));
    console.log(usuarios)
  }, [])
  return (
    <>
      <Header />
      <StyleBody>
        {
          usuarios ? (
            usuarios.map(
              u => {
                return (
                  <Card sx={{ maxWidth: 450, margin: 3 }}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {u.nome}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )
              }
            )
          ) : (<div>Erro</div>)
        }
      </StyleBody>
    </>
  )
}


const StyledDivButton = styled.div`
  height: 100px;
  width: 170px;
  border-radius: 10%;
  background-color: #D3D3D3;
  display: flex;
  justify-content: center;
  align-items: center;
`

