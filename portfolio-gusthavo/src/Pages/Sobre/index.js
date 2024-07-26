import React, {useEffect} from "react";

import databaselogo from "../../assets/database-logo.png"
import postgreslogo from "../../assets/postgresql-logo.png"
import mysqllogo from "../../assets/mysql-logo.png"
import sqlserverlogo from "../../assets/sqlserver-logo.png"

import javalogo from "../../assets/java-logo.png"
import reactlogo from "../../assets/react-logo.png"
import dockerlogo from "../../assets/docker-logo.png"
import gitlogo from "../../assets/git-logo.png"

import certificadopy from "../../assets/certificado-2.png"

import winlogo from "../../assets/win-logo.png"
import deblogo from "../../assets/deb-logo.png"
import ubulogo from "../../assets/ubuntu-logo.png"

import { Link } from "react-router-dom";

import "../Sobre/style.css"

export default function Sobre() {

    useEffect(() => {
        const sliderWrapper = document.querySelector(".slider-wrapper");
        const slides = document.querySelectorAll(".slide");
        const totalSlides = slides.length;
        let currentIndex = 0;

        const nextButton = document.getElementById("next");
        const prevButton = document.getElementById("prev");

        const showNextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        };

        const showPrevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        };

        nextButton.addEventListener("click", showNextSlide);
        prevButton.addEventListener("click", showPrevSlide);

        const updateSlider = () => {
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        return () => {
            nextButton.removeEventListener("click", showNextSlide);
            prevButton.removeEventListener("click", showPrevSlide);
        };
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
        <div className="container">
            <section id="about">
                <h2>Sobre Mim</h2>
                <p>Me chamo Gusthavo Henrique de Oliveira Monteiro, tenho 21 anos,
                estou cursando o 6°período de sistemas de informação na faculdade UniSapiens, atualmente estou estagiando na cordenação de tecnologia da informação da Federação das indústrias de Rondônia como analista de sistemas.
                 Minha função é criar/fazer manutenção em relatórios/consultas SQL que são demandadas, criar soluções/atualizações/integrações junto de meu supervisor para os sistema já existentes, afim de otimizar a produtividade da empresa e oferecer suporte técnico aos usuários da ERP RM por meio de atendimentos via chamados.
                  Atualmente eu já pesquisei e estudei sobre grande parte das áreas da tecnologia e minha meta atual é me especializar na área de DevOps</p>
            </section>
            <section id="skills">
                <h2>Conhecimentos</h2>
                <div class="portfolio-card">
                    <div class="content">
                        <h3>Banco de dados</h3>
                        <div>
                            <img src={databaselogo} alt="Database Logo"/>
                            <img src={postgreslogo} alt="Database Logo"/>
                            <img src={mysqllogo} alt="Database Logo" />
                            <img src={sqlserverlogo} alt="Database Logo" />
                        </div>
                        <p>Conhecimento acadêmico em configuração de servidor de banco de dados e consultas complexas em PostgreSQL e MySQL. Além disso,
                        vivência prática com SQL SERVER no ambiente profissional com elaboração e manutenção de relatórios.</p>
                    </div>
                </div>
                <div class="portfolio-card">
                    <div class="content">
                        <h3>Desenvolvimento</h3>
                        <div>
                            <img src={javalogo} alt="Java Logo"/>
                            <img src={reactlogo} alt="React Logo"/>
                            <img src={dockerlogo} alt="Docker Logo"/>
                            <img src={gitlogo} alt="Git Logo"/>
                        </div>
                        <p>Projetos individuais e conhecimento acadêmico em desenvolvimento de APIs RestFul para Web nas linguagens Java ou C#, utilizando frameworks Spring ou dotnet e bom domínio na lógica de programação com essas línguagens.
                        Utilização do React.js para consumir as APIs que foram desenvolvidas e oferecer um layout para o mesmo em projetos web. O versionamento e hospedagem dos meus trabalhos é feito no
                        Github onde uso boas práticas de "git flow" para uma melhor organização durante o desenvolvimento, além disso os serviços de banco de dados e da aplicação por exemplo,
                         são subidos em containers utilizando o Docker e para cada modificação no projeto é configurado um CI/CD com o Github Actions. <p>Atualmente estou estdando Python e aplicando o conhecimento em projetos de análise de dados e integração com powerBI, além de automações de serviços no dia a dia.</p>
                        </p>
                    </div>
                </div>
                <div class="portfolio-card">
                    <div class="content">
                        <h3>Sistemas Operacionais</h3>
                        <div>
                            <img src={winlogo} alt="Windows Logo"/>
                            <img src={deblogo} alt="Debian Logo"/>
                            <img src={ubulogo} alt="Ubuntu Logo"/>
                        </div>
                        <p>Conhecimentos em configuração de servidores linux debian e ubuntu, gerenciamento de pacotes, usuários, serviços 
                            e automação de atividades/tarefas em shell script. Vivencia no ambiente de
                            trabalho com windows e windows server.</p>
                    </div>
                </div>
            </section>
            <section id="certificate">
                <h2>Certificados</h2>
                    <div class="slider">
                        <div class="slider-wrapper">
                            <div class="slide">
                                <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-06032da7-2bb2-4c68-96f2-824717550820.jpg" alt="Certificate 1"/>
                            </div>
                            <div class="slide">
                                <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-c6d4b936-f140-4c8b-9133-1d636c3ca23e.jpg" alt="Certificate 2"/>
                            </div>
                            <div class="slide">
                                <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-c9d8c94d-6e67-4c5a-9ef3-76448819eeb0.jpg" alt="Certificate 3"/>
                            </div>
                            <div class="slide">
                                <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-7de801ce-0707-49a7-9d01-48d50f52abc6.jpg" alt="Certificate 4"/>
                            </div> 
                            <div class="slide">
                                <img src={certificadopy} alt="Certificate 5"/>
                            </div> 
                            <div class="slide">
                                <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-ddc1d972-e197-489e-a9ec-faa3a82a5a23.jpg" alt="Certificate 6"/>
                            </div> 
                        </div>
                    </div>
                <div class="slider-nav">
                    <button id="prev">Anterior</button>
                    <button id="next">Próximo</button>
                </div>
            </section>

        </div>
        <footer>
        <p>&copy; 2024 Gusthavo Monteiro. Todos os direitos reservados.</p> <Link to={"https://drive.google.com/file/d/1i-q4kYABVtTYr13aPKV7CHdNQ1kN23qb/view?usp=sharing"} target="_blank"><p>Meu Currículo</p></Link>
        </footer>
    </div>
    );
}