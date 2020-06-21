import React, { useState } from 'react';
import axios from 'axios'; // add 'axios' for requisitions;
import * as S from './styled';

function App(props) { // Function wich receives props and sets;
const [ usuario, setUsuario ] = useState('');

// function used to get the value "usuario" from imput and search github API for given user repository;
function handlePesquisa() {
  axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
    const repositories = response.data;
    const repositoriesName = [];
    repositories.map((repository) => {
      repositoriesName.push(repository.name)
    });
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
});

}
  return (
    <S.Container>
      <S.Input className="usuarioInput" placeholder="usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;

