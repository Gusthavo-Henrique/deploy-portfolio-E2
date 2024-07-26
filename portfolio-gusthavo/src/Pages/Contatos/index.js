import React from "react";
import { Link } from "react-router-dom";
import gitlogo from "../../assets/git-logo.png";
import instlogo from "../../assets/inst-logo.png";
import linkedinlogo from "../../assets/linkedin.png";
import maillogo from "../../assets/mail-logo.png";
import whatsapplogo from "../../assets/whatsapp-logo.png";
import phonelogo from "../../assets/phone-logo.png";
import "../Contatos/style.css";

export default function Contatos() {
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
            <section className="contact-section">
            <h2>Informações para Contato</h2>
                <div className="contact-item">
                    <img src={phonelogo} alt="Phone" />
                    <span>+55 (69) 99350-8338</span>
                </div>
                <div className="contact-item">
                    <img src={whatsapplogo} alt="WhatsApp" />
                    <Link to={"https://wa.me/5569992584270"} target="_blank">+55 (69) 99258-4270</Link>
                </div>
                <div className="contact-item">
                    <img src={maillogo} alt="Email" />
                    <span>gusthavo.henmonteiro@gmail.com</span>
                </div>
                <div className="contact-item">
                    <img src={gitlogo} alt="GitHub" />
                    <Link to="https://github.com/Gusthavo-Henrique" target="_blank">github.com/Gusthavo-Henrique</Link>
                </div>
                <div className="contact-item">
                    <img src={linkedinlogo} alt="LinkedIn" />
                    <Link to="https://www.linkedin.com/in/gusthavo-monteiro-95a302270/" target="_blank">linkedin.com/in/gusthavo-monteiro</Link>
                </div>
                <div className="contact-item">
                    <img src={instlogo} alt="Instagram" />
                    <Link to="https://www.instagram.com/gusth.monteiro/" target="_blank">instagram.com/gusth.monteiro/</Link>
                </div>
            </section>
            <footer>
            <p>&copy; 2024 Gusthavo Monteiro. Todos os direitos reservados.</p> <Link to={"https://drive.google.com/file/d/1i-q4kYABVtTYr13aPKV7CHdNQ1kN23qb/view?usp=sharing"} target="_blank"><p>Meu Currículo</p></Link>
            </footer>
        </div>
    );
}
