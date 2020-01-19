import React, {useEffect} from 'react';

function Objeto({rastreio}) {
  useEffect(()=>{
    console.log(rastreio);
    
  }, [rastreio])
    return (
      <h1>Objeto</h1>
    );
}

export default Objeto;