import React, {Component} from 'react';
import { Button, Row,Col, InputGroup, FormControl,Card } from 'react-bootstrap';
import './home.css';

class Home extends Component {
    
    
    render(){
        return (
            <div className="text-center">Informe o código de rastreio dentro da caixa de texto acima e em seguida clique em 'Rastrear'</div>
        )
    }
}

export default Home;