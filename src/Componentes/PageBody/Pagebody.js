import styles from './PageBody.module.css'
import { AiFillHtml5, AiOutlineConsoleSql } from 'react-icons/ai'
import { SiCss3, SiMongodb, SiJquery, SiSocketdotio } from 'react-icons/si'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaReact, FaNodeJs } from 'react-icons/fa'
function PageBody() {


    return (
        <>
            <div className={styles.containerBody}>
                <h1 className={styles.titulo}>DESENVOLVEDOR WEB</h1>
                <div className={styles.containerDescricao}>
                    <div className={styles.descricao1}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus, orci in ornare luctus, erat ligula imperdiet mi, sit amet porttitor tortor nisl at nunc. Etiam blandit, lorem et pulvinar maximus, erat orci volutpat quam, ut pretium diam risus at felis. Ut luctus dui mauris, at mollis nisl posuere vitae.
                        </p>
                    </div>
                    <div className={styles.descricao2}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus, orci in ornare luctus, erat ligula imperdiet mi, sit amet porttitor tortor nisl at nunc. Etiam blandit, lorem et pulvinar maximus, erat orci volutpat quam, ut pretium diam risus at felis. Ut luctus dui mauris, at mollis nisl posuere vitae.
                        </p>
                    </div>
                </div>

                <div className={styles.containerPerfil}>
                    <div className={styles.perfil}></div>
                    <AiFillHtml5 className={styles.html}></AiFillHtml5>
                    <SiCss3 className={styles.css}></SiCss3>
                    <BiLogoJavascript className={styles.js}></BiLogoJavascript>
                    <FaReact className={styles.react}></FaReact>
                    <div className={styles.python}></div>
                    <FaNodeJs className={styles.nodejs}></FaNodeJs>
                    <SiMongodb className={styles.mongoDB}></SiMongodb>
                    <div className={styles.git}></div>
                    <SiJquery className={styles.jquery}></SiJquery>
                    <div className={styles.aws}></div>
                    <AiOutlineConsoleSql className={styles.sql}></AiOutlineConsoleSql>
                    <SiSocketdotio className={styles.socket}></SiSocketdotio>
                </div>

            </div>
        </>
    )
}

export default PageBody