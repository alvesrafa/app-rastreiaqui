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
            //console.log(this.state.objeto)
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
            <div className="card m-1">
              <div className="row">
                <div className="col-12 text-center">
                  Código: {this.state.objeto.code}
                </div>
                <div className="col-12 text-center">Código inválido ou ainda não atualizado pela empresa.</div>
              </div>
            </div>
            )}
            {this.state.status === true && this.state.carregando === false &&(
              <div className="card m-1">
                Código: {this.state.objeto.code}
              </div>
          )}
            {this.state.status === true && this.state.carregando === false &&(
                this.state.objeto.tracks.map((track) => (
                  <div className="card m-1">
                    <div className="row p-1 d-flex align-items-center">
                      <div className="col-md-3 col-sm-12 row d-flex justify-content-center">
                        <div className="col-12 text-center icon">
                          <i className="fas fa-long-arrow-alt-down"></i>
                        </div>
                        <div className="d-flex flex-column mb-3 text-center">
                          <div>{this.dataFormatada(track.trackedAt)}</div><br/>
                          <div className="titulo">{track.locale}</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="titulo text-center">{track.status}</div>
                        <div>{track.observation}</div>
                      </div>
                    </div>
                  </div>
                ))
          )}
         </div>
       )
        
    }

}

export default Objeto;