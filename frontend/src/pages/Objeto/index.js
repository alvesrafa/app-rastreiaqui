import React, {Component} from 'react';


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
      fetch(`http://127.0.0.1:3001/rastrear/${this.props.match.params.codigoRastreio}`)
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
    if (objeto.isDelivered === true) return true;
    if (objeto.isInvalid === true) return false;
    //falta verificar quando o objeto ainda não foi postado
  }
    render() {
       return (
        
          <div className="d-flex justify-content-center flex-column">
            <div>Código: {this.state.objeto.code}</div>
            {this.state.status === false &&(
              <div>Código invalido</div>
            )}
            {this.state.status === true &&(
              
              this.state.objeto.tracks.map((track) => (
                <div class="card text-center">
                  <div class="card-header">
                    {track.status}
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{track.locale}</h5>
                    <p class="card-text">{track.observation}</p>
                  </div>
                  <div class="card-footer text-muted">
                  <p class="card-text">{track.trackedAt}</p>
                  </div>
                </div>

            ))
            )}
            
          </div>
       )
        
    }

}

export default Objeto;