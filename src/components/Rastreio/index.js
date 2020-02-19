import React from 'react';
import {Grow, Paper, } from '@material-ui/core'
import './rastreio.css';
function Rastreio({track}) {
    function dataFormatada(date){
        var data = new Date(date),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            ano  = data.getFullYear(),
            hora = data.getHours(),
            minuto = data.getMinutes();
        return dia + "/" + mes + "/" + ano + " às " + hora + ":" + minuto;
    }
    return (
        <Grow in={true} timeout={1150}>
            <Paper elevation={2} className="box">
                <div className="local">
                    <div className="data">{dataFormatada(track.trackedAt)}</div>  
                    <div className="cidade">{track.locale}</div>
                </div>
                <div className="info">
                    <h4>{track.status}</h4>
                    <p>{track.observation}</p>
                </div>
            </Paper>
        </Grow>
    );
}

export default Rastreio;