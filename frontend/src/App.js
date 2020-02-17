import React, {useState} from 'react';
import './app.css';
import api from './services/api';
import logo from './logo.png';
import Lottie from 'react-lottie';
import animationData from './assets/loading.json';
import Objeto from './components/Objeto';

function App() {
  const [delivered, setDelivered] = useState(null);
  const [code, setCode] = useState('');
  const [rastreio, setRastreio] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    if(code !== ""){
      setRastreio('')
      setDelivered(false)
      const response = await api.get(`/rastrear/${code}`);
      setRastreio(response.data[0])

      if(response.data[0].isInvalid){ //validação deve ser feita por objeto
        setDelivered(false)
      }else {
        setDelivered(true)
      }
    }
    
    setLoading(false);
  }

  return (
    <>
    <header>
      <ul>
        <li><img src={logo} width="60" alt="logo rastreiaqui"/></li>
        <ul>
        <li><a onClick={()=> {setDelivered(null)}}>Sobre</a></li>
          <li><a onClick={()=> {setDelivered(null)}}>Contato</a></li>
        </ul>
      </ul>
    </header>
    <div id="app">
      <div className="search">
        <h1><img src={logo} width="120" alt="RastreiAqui"/></h1>
      
        <form>
          <input placeholder="Código de rastreio" value={code} onChange={e => setCode(e.target.value)} />
          <button type="submit" onClick={handleSearch}>Buscar</button>
        </form>
        <h3>Rastreie Aqui a sua encomenda de forma rápida e segura!</h3>
      </div>

      { 
        loading ? 
        
        <Lottie
          className="loading"
          options={{
            loop: true,
            autoplay: true, 
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          height={400}
          width={400}
        />
      
        : 

        <Objeto rastreio={rastreio} isDelivered={delivered}/>
      }

    </div>
    </>
  );
}

export default App;
