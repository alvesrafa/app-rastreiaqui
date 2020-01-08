import React from 'react';
import Routes from './routes';
import './app.css';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
