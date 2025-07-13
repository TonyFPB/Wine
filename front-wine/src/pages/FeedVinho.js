import { Card, CardActionArea, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import AreaComentario from "../components/AreaComentario";


export default function FeedVinho({ vinho, avaliacoes, recuperarVinho }) {
  if (vinho === undefined) {
    return <Typography sx={{ margin: 2 }}>Selecione um vinho para ver os detalhes.</Typography>
  }
  
  return (
    <>
      <Card sx={{ maxWidth: 500, margin: 3 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {vinho?.vinhoNome} ({vinho?.safra})
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Vinícola:{vinho?.vinicola}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              Pais: {vinho?.pais}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <List>
        {avaliacoes ? avaliacoes.map(
          a => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    sx={{ maxWidth: 500, wordWrap: 'break-word' }}
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: 'text.primary', display: 'inline' }}
                        >
                          {a.donoComentario + ": "}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: 'text.secondary', display: 'inline', wordBreak: 'break-word' }}
                        >
                          {a.comentario}
                        </Typography>
                        <br />
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: 'text.secondary', display: 'inline' }}
                        >
                          Nota: {a.nota}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            )
          }
        ) : ''}
      </List>
    </>
  )
}