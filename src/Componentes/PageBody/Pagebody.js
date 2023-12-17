import React from 'react';
import styles from './PageBody.module.css'
import { AiFillHtml5, AiOutlineConsoleSql } from 'react-icons/ai'
import { SiCss3, SiMongodb, SiJquery, SiSocketdotio, SiPrisma, SiTypescript } from 'react-icons/si'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaReact, FaNodeJs } from 'react-icons/fa'


function PageBody() {

    return (
        <>
            <div id="PageBody" className={styles.containerBody}>
                <h1 className={styles.titulo}>DESENVOLVEDOR WEB</h1>
                <div className={styles.containerDescricao}>
                    <div className={styles.descricao1}>
                        <p>
                            Atualmente, sou um estudante de Análise e Desenvolvimento de Sistemas, e estou dedicando meu tempo para aprimorar minhas habilidades, com o objetivo de realizar o sonho de me tornar um desenvolvedor web. Cada dia é uma oportunidade de aprendizado e crescimento nessa jornada.
                        </p>
                    </div>
                    <div className={styles.descricao2}>
                        <p>
                            Tenho trabalhado em projetos fullstack, utilizando React e Node.js, onde me dediquei à criação de APIs e à hospedagem na AWS. Neste momento, estou em busca da minha primeira oportunidade como desenvolvedor.
                        </p>
                    </div>
                </div>

                <div className={styles.containerPerfil}>
                    <div className={styles.perfil}></div>
                    <AiFillHtml5 className={styles.html}></AiFillHtml5>
                    <SiCss3 className={styles.css}></SiCss3>
                    <BiLogoJavascript className={styles.js}></BiLogoJavascript>
                    <FaReact className={styles.react}></FaReact>
                    <SiPrisma className={styles.prisma}></SiPrisma>
                    <FaNodeJs className={styles.nodejs}></FaNodeJs>
                    <SiMongodb className={styles.mongoDB}></SiMongodb>
                    <div className={styles.git}></div>
                    <SiJquery className={styles.jquery}></SiJquery>
                    <div className={styles.aws}></div>
                    <AiOutlineConsoleSql className={styles.sql}></AiOutlineConsoleSql>
                    <SiSocketdotio className={styles.socket}></SiSocketdotio>
                    <SiTypescript className={styles.ts}></SiTypescript>

                </div>

            </div>
        </>
    )
}

export default PageBody