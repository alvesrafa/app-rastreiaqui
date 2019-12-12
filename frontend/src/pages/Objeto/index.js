import React, {Component} from 'react';


class Objeto extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          codigo: ''
        };

    }
    componentDidMount() {
        
        
        
        fetch(`http://127.0.0.1:3001/rastrear`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({codigo: this.props.match.params.codigoRastreio})
        }).then((response) => {
            if(response.ok) {
                response.blob().then(function(myBlob) {
                  console.log(myBlob)
                });
              } else {
                console.log('Network response was not ok.');
              }
        })
        
    }

    render() {
        return ( 
            <div className="container">
                {this.state.codigo}
            </div>
        );
    }

}

export default Objeto;