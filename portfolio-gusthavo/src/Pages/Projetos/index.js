import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Projetos/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function Projetos() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const searchRepos = async () => {
            const response = await fetch('https://api.github.com/users/gusthavo-henrique/repos');
            const data = await response.json();
            setRepos(data);
        };
        searchRepos();
    }, []);

    return (
        <div className="main-container">
            <header>
                <h1>Gusthavo Monteiro</h1>
                <nav>
                    <Link className="home-link" to={"/Home"}>
                        <span>Home</span>
                    </Link>
                    <Link className="about-link" to={"/Sobre"}>
                        <span>Sobre</span>
                    </Link>
                    <Link className="projects-link" to={"/Projetos"}>
                        <span>Projetos</span>
                    </Link>
                    <Link className="contato-link" to={"/Contatos"}>
                        <span>Contatos</span>
                    </Link>
                </nav>
            </header>
            <section id="projects">
                <h2>Meus Projetos</h2>
                <div className="portfolio-container">
                    {
                        repos.length > 0 ? (
                            repos.map((repo) => (
                                <div className="portfolio-card" key={repo.id}>
                                    <div className="content">
                                        <h3>{repo.name}</h3>
                                        <p>{repo.description}</p>
                                        <span><FontAwesomeIcon icon={faCode} className="icon" /> Linguagem: {repo.language}</span>
                                        <Link className="repos-link" to={repo.html_url} target="_blank">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" /> Repositório Github
                                        </Link>
                                        <span><FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Criado em: {repo.updated_at}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Carregando...</p>
                        )
                    }
                </div>
            </section>
            <footer>
            <p>&copy; 2024 Gusthavo Monteiro. Todos os direitos reservados.</p> <Link to={"https://drive.google.com/file/d/1i-q4kYABVtTYr13aPKV7CHdNQ1kN23qb/view?usp=sharing"} target="_blank"><p>Meu Currículo</p></Link>
            </footer>
        </div>
    );
}
