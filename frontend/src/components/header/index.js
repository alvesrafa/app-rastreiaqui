import React, {Component} from 'react';
import './master.css';
import { Button, Row, Col, InputGroup, FormControl,Card } from 'react-bootstrap';



export default class Header extends Component {
    handleRastreio = () => {
        var codigo = document.getElementById('codigo').value;
        window.location.replace(`/rastrear/${codigo}`)
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="logo">icon</div>
                    <ul className="lista-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
                <div className="busca">
                    <Col sm={12}>
                        <InputGroup className="form-group">
                            <FormControl type="text" className="form-control" id="codigo" placeholder="Código de rastreio"/>
                        </InputGroup>
                    </Col>
                    <Col sm={12} className="text-center">
                        <Button className="btn btn-warning" onClick={() => this.handleRastreio()}>Rastrear</Button>
                    </Col>
                </div>
                <div className="sub text-center">
                    <p>Rastreie Aqui a sua encomenda!</p>
                </div>
            </header>
        )
    }
}
