import React, {useState} from 'react';
import './app.css';
import api from './services/api';
import Objeto from './components/Objeto';

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
      if(response.data[0].isDelivered){
        console.log('true')
        setDelivered(true)
      }
      if(response.data[0].isInvalid){
        console.log('false')
        setDelivered(false)
      }
    }

    
    
  }

  return (
    <div id="app">
      <div className="search">
        <form>
          <input placeholder="Código de rastreio" value={code} onChange={e => setCode(e.target.value)} />
          <button onClick={handleSearch}>Buscar</button>
        </form>
      </div>
      <div id="objeto">
        <Objeto rastreio={rastreio} isDelivered={delivered}/>
      </div>
    </div>
  );
}

export default App;
