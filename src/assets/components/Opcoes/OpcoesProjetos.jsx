import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './OpcoesProjetos.css'

import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado';
import usarGithubOctoKitRepos from '../../../hooks/usarGithubOctokitRepos';

function OpcoesProjetos({ setProjetoSelecionado }) {
    const navigate = useNavigate();
    const [numSelecionado, setNumSelecionado] = useState(0);
    const [indiceAtivo, setIndiceAtivo] = useState(null);

    const { repos, loading, error } = usarGithubOctoKitRepos('FelipeDNL');

    const usarTeclado = (index) => {
        setIndiceAtivo(index);
        setTimeout(() => setIndiceAtivo(null), 50); // 50ms para fazer a animação de seleção ao usar o teclado

        // Verifica se o índice é -1, o que indica que o usuário deseja voltar
        if (index === -1) {
            navigate(-1); // Navega para a página anterior
        } else if (repos[index - 1]) { // Verifica se existe um repositório no índice selecionado
            setProjetoSelecionado(repos[index - 1].name); // Define o projeto selecionado com o nome do repositório correspondente
        }
    };

    usarNavegacaoTeclado(repos.length + 1, usarTeclado, numSelecionado, setNumSelecionado);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='opcoes-projetos'>
            <Link to='/'>
                <div
                    className={`opVoltar ${numSelecionado === -1 ? 'selected' : ''} ${indiceAtivo === -1 ? 'active' : ''}`}
                    onClick={() => setProjetoSelecionado(undefined)}
                    onMouseEnter={() => setNumSelecionado(-1)}
                >
                    ...<small>(voltar)</small>
                </div>
            </Link>

            <div
                className={`op ${numSelecionado === 0 ? 'selected' : ''} ${indiceAtivo === 0 ? 'active' : ''}`}
                onClick={() => setProjetoSelecionado('README.md')}
                onMouseEnter={() => setNumSelecionado(0)}
            >
                /README.md
            </div>

            {repos.map((repo, index) => (
                <div
                    key={repo.id}
                    className={`op ${numSelecionado === index + 1 ? 'selected' : ''} ${indiceAtivo === index + 1 ? 'active' : ''}`}
                    onClick={() => setProjetoSelecionado(repo.name)}
                    onMouseEnter={() => setNumSelecionado(index + 1)}
                >
                    /{repo.name}
                </div>
            ))}

        </div>
    )
}

export default OpcoesProjetos