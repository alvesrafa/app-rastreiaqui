import React, {Component} from 'react';
import { Button, Row,Col, InputGroup, FormControl,Card } from 'react-bootstrap';
import './home.css';

class Home extends Component {
    
    handleRastreio () {
        var codigo = document.getElementById('codigo').value;
        window.location.replace(`/rastrear/${codigo}`)
    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <Row className="text-center">
                        <Col sm={12}>
                            <InputGroup className="form-group">
                                <FormControl type="text" className="form-control" id="codigo" placeholder="Código de rastreio"/>
                            </InputGroup>
                        </Col>
                        <Col sm={12}>
                        <Button className="btn btn-warning" onClick={() => this.handleRastreio()}>Rastrear</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Home;