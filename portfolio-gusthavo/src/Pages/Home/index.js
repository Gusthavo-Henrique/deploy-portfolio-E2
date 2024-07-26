import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Home() {
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
            <div className="container">
                <section className="intro-section">
                    <h2>Bem-vindo ao meu portfólio!</h2>
                    <p className="highlighted-text">Fullstack Developer</p>
                    <p>Portfólio pessoal desenvolvido em react.js, integrado a api do github e hospedado em um servidor cloud AWS.</p>
                    <p>Para saber mais sobre mim e meus projetos navegue pelas sessões acima.</p>
                </section>
            </div>
            <footer>
                <p>&copy; 2024 Gusthavo Monteiro. Todos os direitos reservados.</p> <Link to={"https://drive.google.com/file/d/1i-q4kYABVtTYr13aPKV7CHdNQ1kN23qb/view?usp=sharing"} target="_blank"><p>Meu Currículo</p></Link>
            </footer>
        </div>
    );
}
