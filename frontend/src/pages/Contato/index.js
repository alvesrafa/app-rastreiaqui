import React, {useState} from 'react';

import './contato.css';

const Contato = () => {
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState('');

    function handleContato(e){
        e.preventDefault();
        

        
        setEmail('');
        setInfo('');
        alert('Mensagem entregue com sucesso! Obrigado por me ajudar a evoluir ")')
    }
    return (
        <div id="contato">
            <h1>Contato</h1>
            <form onSubmit={handleContato}>
                <input type="email" onChange={e => setEmail(e.target.value)} required placeholder="Seu email" value={email} />
                <textarea required onChange={e => setInfo(e.target.value)} cols="30" rows="10" placeholder="Mensagens construtivas (:" value={info} />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Contato;