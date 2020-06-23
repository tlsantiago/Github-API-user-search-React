import React, { useState } from 'react';
import axios from 'axios'; // add 'axios' for requisitions;
import * as S from './styled';
import { useHistory } from 'react-router-dom'; // Imported useHistory, wich controls page changes;

function App(props) { // Function wich receives props and sets;
  const history = useHistory();
  const [usuario, setUsuario] = useState('');

  // function used to get the value "usuario" from imput and search github API for given user repository;
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data; // Declared a const wich receives full get response data;
      const repositoriesName = []; // Created a empty array, wich will further receive repositories names;
      repositories.map((repository) => { // Map method, used to run given function trough each array item;
        repositoriesName.push(repository.name) // Pushing only the rep. names of each object in array;
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName)); // Storing data into local storage;
      history.push('/repositories'); // Calling history to change to another page after search event;
    });

  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        <S.ErrorMsg>Ocorreu um erro, tente novamente</S.ErrorMsg>
      </S.Content>
    </S.HomeContainer>
  );
}

export default App;

