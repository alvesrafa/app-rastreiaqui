import React, {useState} from 'react';
import './app.css';
import api from './services/api';
import Objeto from './components/Objeto';

function App() {
  const [code, setCode] = useState('');
  const [rastreio, setRastreio] = useState('');
  
  async function handleSearch(e) {
    e.preventDefault();
    if(code != null){
      const response = await api.get(`/rastrear/${code}`);
      setRastreio(response.data[0])
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
      <Objeto rastreio={rastreio}/>
    </div>
  );
}

export default App;
