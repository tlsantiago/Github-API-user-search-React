import React, { useState } from 'react';
import axios from 'axios'; // add 'axios' for requisitions;

function App(props) { // Function wich receives props and set state;
const [ usuario, setUsuario ] = useState('');

// function used to get the value "usuario" from imput and search github API for given user repository;
function handlePesquisa() {
  axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));

}
  return (
    <>
      <input className="usuarioInput" placeholder="usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;

