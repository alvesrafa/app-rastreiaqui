import React from 'react';
import Rastreio from '../Rastreio';
import './objeto.css';
import Sobre from '../../pages/Sobre';
import { Grow, Paper } from '@material-ui/core'

function Objeto({rastreio, isDelivered}) {
  if(isDelivered){
    return(
      <div className="container">
        <div className="rastreio-code">
          <strong>Código: {rastreio.code}</strong>
        </div>
        <Grow in={true} timeout={400}>
          <div className="rastreios">
            {rastreio.tracks.map((track, key) => (
              <Rastreio key={key} track={track} />
            ))}
          </div>
        </Grow>
      </div>
      
    )
  }else if(isDelivered == false){
    return(
      <div className="container">
        <Grow in={true} timeout={400}>
        <div className="rastreio-code-invalid">
          <strong>Código: {rastreio.code}</strong>
          <h3>Código inválido ou ainda não atualizado</h3>
          <p>Verifique o código e realize uma nova busca. caso o código esteja correto, aguarde algumas horas até que o correios atualize as informações de sua encomenda.</p>
        </div>
        </Grow>
      </div>
    )
  } else if(isDelivered == null){
    return <Grow in={true} timeout={400}><Sobre/></Grow>;
  }
  

}

export default Objeto;