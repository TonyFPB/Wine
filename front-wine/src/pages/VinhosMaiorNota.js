import Header from "../components/Header"
import styled from "styled-components"
import { vinhosAvaliados, vinhosMaiorNota } from "../service/requisicoes"
import { useEffect, useState } from "react"
import { Card, CardActionArea, CardContent, Typography } from "@mui/material"

export default function VinhosMaiorNota() {
  const [vinhos, setVinhos] = useState([])

  useEffect(() => {
    vinhosMaiorNota().then(res => setVinhos(res));
  }, [])
  return (
    <>
      <Header />
      <StyleBody>
      <Typography variant="h3">Recuperar vinhos com uma nota maior que a média do país</Typography>
        {
          vinhos ? (
            vinhos.map(
              v => {
                return (
                  <Card sx={{ maxWidth: 450, margin: 3 }}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {v.nome} ({v.safra})
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                          Vinicola: {v.vinicola} ({v.pais})
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {v.comentario}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                          Nota: {v.nota}
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


export const StyleBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

