import React, {Component} from 'react';


class Objeto extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          objeto: '',
          status: false
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
          <div className="container">
            {this.state.status === false &&(
              <div>Está errado</div>
            )}
            {this.state.status === true &&(
              <div>Está correto</div>
            )}
            
          </div>
       )
        
    }

}

export default Objeto;