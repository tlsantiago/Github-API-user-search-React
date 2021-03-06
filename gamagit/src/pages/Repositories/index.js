import React, { useEffect, useState } from 'react'; // Imported useEffect, wich will monitor variable changes and call a function when it happens. Kinda like eventListener;
import * as S from './styled';
import  { useHistory } from 'react-router-dom';

export default function Repositories() {
    const history = useHistory();
    var [repositories, setRepositories] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName'); // storing into "repositoriesName" variable the content of "repotoriesName" saved into local storage;
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName); // turning this info into object again, for this data is a string in localStorage;
            setRepositories(repositoriesName); // function called;
            localStorage.clear();
        } else {
            history.push('/');

        }
    }, []); // Leaving variable empty, so the UseEffect will not monitor a single variable, but execute the function on page load instead.
    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map(repository => { // maping through repositories and returning each repository as a 'ListItem'. 
                    return ( // even though it's not a 'for/while' loop, it works and gets each repository because 'map' will execute the function for each element inside used array;
                        <S.ListItem>Repositório: {repository}</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}