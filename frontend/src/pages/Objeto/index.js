class Objeto extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          codigo: ''
        };

    }
    componentDidMount() {
        fetch(`http://127.0.0.1:3001/rastrear/${this.props.match.params.codigoRastreio}`)
        .then(res => res.json())
            .then((result) => {
                this.setState({codigo: result});
          },
          (error) => {
            console.log('erro')
          }
        )
    
        
    }

    render() {
        return ( 
            <div className="container">
             
            </div>
        );
    }

}

export default Objeto;