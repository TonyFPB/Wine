import Header from "../components/Header"
import {StyleBody} from "./Vinhos"
import styled from "styled-components"
import { qtdAvaliacao } from "../service/requisicoes"
import { useEffect, useState } from "react"
import { Card, CardActionArea, CardContent, Typography } from "@mui/material"

export default function QuantidadeAvaliacoes() {
  const [qtdAva, setQtdAvaliacao] = useState([])

  useEffect(() => {
    qtdAvaliacao().then(res => setQtdAvaliacao(res));
    console.log(qtdAva)
  }, [])
  return (
    <>
      <Header />
      <StyleBody>
        {
          qtdAva ? (
            qtdAva.map(
              qtd => {
                console.log(qtd)
                return (
                  <Card sx={{ maxWidth: 450, margin: 3 }}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {qtd.nome}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                          Comentarios: {qtd.quantidade_de_avaliaçoes}
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

