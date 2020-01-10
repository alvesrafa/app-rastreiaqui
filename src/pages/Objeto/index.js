import React, {Component} from 'react';
import './master.css';
import {ThreeDots  } from 'svg-loaders-react';

class Objeto extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          objeto: '',
          status: '',
          codigo: '',
          carregando: true,

        };

    }
    componentDidMount() {
      
      fetch(`https://rastreiaqui-back.herokuapp.com/rastrear/${this.props.match.params.codigoRastreio}`)
      .then(res => res.json())
          .then((result) => {
            this.setState({objeto: result[0]})
            console.log(this.state.objeto)
            if(this.analisarObjeto(this.state.objeto)){
              this.setState({status : true})
              this.setState({carregando: false})
            } else {
              this.setState({status : false})
              this.setState({carregando: false})
            }
        },
        (error) => {
          console.log('erro')
        }
      )
      
  }

  analisarObjeto(objeto){
    if (objeto.isInvalid === true) return false;

    return true;
    //falta verificar quando o objeto ainda não foi postado
  }
  dataFormatada(date){
    var data = new Date(date),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = data.getFullYear(),
        hora = data.getHours(),
        minuto = data.getMinutes();
    return dia + "/" + mes + "/" + ano + " às " + hora + ":" + minuto;
}
    render() {
       return (
         <div>
          <div className="text-center">
            {this.state.carregando === true &&(
              <ThreeDots  stroke="#000"/>
            )}
          </div>
          {this.state.status === false &&(
            <div className="row">
              <div className="text-center">
              Código: {this.state.objeto.code}
              </div>
              <div>Código invalido ou ainda não atualizado.</div>
            </div>
            
            )}
            {this.state.status === true && this.state.carregando === false &&(
                this.state.objeto.tracks.map((track) => (
                  
                    <div className="row d-flex justify-content-sm-center">
                      <div className="col-md-3 col-sm-12 side row ">
                        <div className="col-12 icon ml-5">
                          <i className="fas fa-long-arrow-alt-down"></i>
                        </div>
                        <div>{this.dataFormatada(track.trackedAt)}</div>
                        <p>{track.locale}</p>
                      </div>
                      <div className="col-md-9 col-sm-12 informacao">
                        <p>{track.status}</p>
                        {track.observation}
                      </div>
                    </div>
                  
                ))
             
          )}
         </div>
       )
        
    }

}

export default Objeto;