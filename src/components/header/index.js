import React, {Component} from 'react';
import './master.css';
import { Button, Form, Row, Col, InputGroup, FormControl,Card } from 'react-bootstrap';
import logo from './logo-rastreiaqui.png';


export default class Header extends Component {
    handleRastreio = () => {
        var codigo = document.getElementById('codigo').value;
        if(codigo === ''){
            alert('Informe o código de rastreio no campo indicado!');
            document.getElementById('codigo').focus();
        }else 
            window.location.replace(`/rastrear/${codigo}`)
    }
    home() {
        window.location.replace(`/`)
    }
    render() {
        return (
            <header>
                <nav>
                    <div className="logo"><img width="90" src={logo}/></div>
                    <ul className="lista-menu">
                        <li><a href="#" id="home" onClick={() => this.home()}>Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
                <div className="busca">
                    <Form>
                        <Row className="m-1 text-center">
                            <Col md={10} sm={12}>
                                <InputGroup className="form-group">
                                    <FormControl type="text" required className="form-control" required id="codigo" placeholder="Código de rastreio"/>
                                </InputGroup>
                            </Col>
                            <Col md={2} sm={12}>
                                <Button className="btn btn-warning" onClick={() => this.handleRastreio()}>Rastrear</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="sub text-center">
                    <p>Rastreie Aqui a sua encomenda!</p>
                </div>
            </header>
        )
    }
}
