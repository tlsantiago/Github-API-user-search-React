import React, { useEffect, useState } from 'react'; // Imported useEffect, wich will monitor variable changes and call a function when it happens. Kinda like eventListener;
import * as S from './styled';

export default function Repositories() {
    var [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName'); // storing into "repositoriesName" variable the content of "repotoriesName" saved into local storage;
        repositoriesName = JSON.parse(repositoriesName); // turning this info into object again, for this data is a string in localStorage;
        setRepositories(repositoriesName); // function called;
        localStorage.clear();
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
        </S.Container>
    )
}