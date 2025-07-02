import Header from "../components/Header"
import {StyleBody} from "./Vinhos"
import styled from "styled-components"
import { mediaPais } from "../service/requisicoes"
import { useEffect, useState } from "react"
import { Card, CardActionArea, CardContent, Typography } from "@mui/material"

export default function Media() {
  const [paisesMedia, setPaisesMedia] = useState([])

  useEffect(() => {
    mediaPais().then(res => setPaisesMedia(res));
    console.log(paisesMedia)
  }, [])
  return (
    <>
      <Header />
      <StyleBody>
        {
          paisesMedia ? (
            paisesMedia.map(
              m => {
                console.log(m)
                return (
                  <Card sx={{ maxWidth: 450, margin: 1 }}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {m.pais}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                          Média: {m.media.toFixed(2)}
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

