import React, {useState} from 'react';
import './app.css';
import api from './services/api';
import Objeto from './components/Objeto';
import logo from './logo.png';


function App() {
  const [delivered, setDelivered] = useState(null);
  const [code, setCode] = useState('');
  const [rastreio, setRastreio] = useState({});

  async function handleSearch(e) {
    e.preventDefault();
    if(code !== ""){
      setRastreio('')
      setDelivered(false)
      const response = await api.get(`/rastrear/${code}`);
      setRastreio(response.data[0])

      if(response.data[0].isInvalid){
        setDelivered(false)
      }else {
        setDelivered(true)
      }
      
    }
  }

  return (
    <>
    <header>
      <ul>
        <li><img src={logo} width="60" alt="logo rastreiaqui"/></li>
        <ul>
          <li><a onClick={(e)=> {setDelivered(null)}}>Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </ul>
    </header>
    <div id="app">
      <div className="search">
        <h1><img src={logo} width="120" alt="RastreiAqui"/></h1>
      
        <form>
          <input placeholder="Código de rastreio" value={code} onChange={e => setCode(e.target.value)} />
          <button onClick={handleSearch}>Buscar</button>
        </form>
        <h3>Rastreie Aqui a sua encomenda de forma rápida e segura!</h3>
      </div>
      <Objeto rastreio={rastreio} isDelivered={delivered}/>

    </div>
    </>
  );
}

export default App;
