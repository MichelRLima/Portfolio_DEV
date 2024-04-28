import React from 'react';
import styles from './PageBody.module.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3, SiMongodb, SiJquery, SiSocketdotio, SiPrisma, SiTypescript, SiPostgresql, SiDocker, SiTrpc, SiTailwindcss } from 'react-icons/si'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'
import { TbBrandNextjs } from "react-icons/tb";

function PageBody() {




    return (
        <>


            <div id="PageBody" className={styles.containerBody}>
                <h1 className={styles.titulo} >FULL STACK DEVELOPER</h1>
                <div className={styles.containerDescricao}>
                    <div className={styles.descricao1}>
                        <p>
                            Atualmente, sou um estudante de Análise e Desenvolvimento de Sistemas, e estou dedicando meu tempo para aprimorar minhas habilidades, com o objetivo de realizar o sonho de me tornar um desenvolvedor. Cada dia é uma oportunidade de aprendizado e crescimento nessa jornada.
                        </p>
                    </div>
                    <div className={styles.descricao2}>
                        <p>
                            Tenho trabalhado em projetos fullstack, utilizando React e Node.js, onde me dediquei à criação de APIs e à hospedagem na AWS. Neste momento, estou em busca da minha primeira oportunidade como desenvolvedor.
                        </p>
                    </div>
                </div>

                <div className={styles.containerPerfil}>
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="Michel" className={styles.perfil}></div>
                    <AiFillHtml5 data-tooltip-id="my-tooltip" data-tooltip-content="HTML" className={styles.html}></AiFillHtml5>
                    <SiCss3 data-tooltip-id="my-tooltip" data-tooltip-content="CSS" className={styles.css}></SiCss3>
                    <BiLogoJavascript data-tooltip-id="my-tooltip" data-tooltip-content="JavaScript" className={styles.js}></BiLogoJavascript>
                    <FaReact data-tooltip-id="my-tooltip" data-tooltip-content="React" className={styles.react}></FaReact>
                    <SiPrisma data-tooltip-id="my-tooltip" data-tooltip-content="Prisma" className={styles.prisma}></SiPrisma>
                    <FaNodeJs data-tooltip-id="my-tooltip" data-tooltip-content="Node" className={styles.nodejs}></FaNodeJs>
                    <SiMongodb data-tooltip-id="my-tooltip" data-tooltip-content="MongoDB" className={styles.mongoDB}></SiMongodb>
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="Git" className={styles.git}></div>
                    <SiJquery data-tooltip-id="my-tooltip" data-tooltip-content="Jquery" className={styles.jquery}></SiJquery>
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="AWS" className={styles.aws}></div>
                    <SiPostgresql data-tooltip-id="my-tooltip" data-tooltip-content="PostgreSQL" className={styles.sql}></SiPostgresql>
                    <SiSocketdotio data-tooltip-id="my-tooltip" data-tooltip-content="Socket.io" className={styles.socket}></SiSocketdotio>
                    <SiTypescript data-tooltip-id="my-tooltip" data-tooltip-content="TypeScript" className={styles.ts}></SiTypescript>
                    <SiDocker data-tooltip-id="my-tooltip" data-tooltip-content="Docker" className={styles.docker}></SiDocker>
                    <TbBrandNextjs data-tooltip-id="my-tooltip" data-tooltip-content="Next.js" className={styles.nextjs} />
                    <SiTrpc data-tooltip-id="my-tooltip" data-tooltip-content="tRPC" className={styles.trpc} />
                    <SiTailwindcss data-tooltip-id="my-tooltip" data-tooltip-content="Tailwind CSS" className={styles.tailwind} />
                    <Tooltip id="my-tooltip" />

                </div>

            </div>
        </>
    )
}

export default PageBody