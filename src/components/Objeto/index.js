import React, {useEffect, useState} from 'react';
import Rastreio from '../Rastreio';
import './objeto.css';
import Sobre from '../../pages/Sobre';
function Objeto({rastreio, isDelivered}) {
  if(isDelivered){
    return(
      <div className="container">
        <div className="rastreio-code">
          <strong>Código: {rastreio.code}</strong>
        </div>
        <div className="rastreios">
          {rastreio.tracks.map((track, key) => (
            <Rastreio key={key} track={track} />
          ))}
        </div>
      
      </div>
      
    )
  }else if(isDelivered == false){
    return(
      <div className="container">
        <div className="rastreio-code">
          <strong>Código: {rastreio.code}</strong>
        </div>
        <div className="rastreios">
          <strong>Código inválido</strong>
        </div>
      </div>
    )
  } else if(isDelivered == null){
    return <Sobre/>;
  }
  

}

export default Objeto;