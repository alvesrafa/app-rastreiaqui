import React, {Component} from 'react';
import './master.css';

class Objeto extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          objeto: '',
          status: false,
          codigo: '',

        };

    }
    componentDidMount() {
      fetch(`localhost:3000/rastrear/${this.props.match.params.codigoRastreio}`)
      .then(res => res.json())
          .then((result) => {
            this.setState({objeto: result[0]})

            console.log(this.state.objeto)
            if(this.analisarObjeto(this.state.objeto)){
              this.setState({status : true})
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
        
          <div className="">
            <div className="text-center">Código: {this.state.objeto.code}</div>
            {this.state.status === false &&(
              <div>Código invalido</div>
            )}
            {this.state.status === true &&(
              
              this.state.objeto.tracks.map((track) => (
                <div className="row objeto">
                  <div className="col-12 text-center icon"><i class="fas fa-long-arrow-alt-down"></i></div>
                  <div className="col-2 side">
                    <div>{this.dataFormatada(track.trackedAt)}</div>
                    <p>{track.locale}</p>
                  </div>
                  <div className="col-10 informacao">
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