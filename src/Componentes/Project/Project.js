import styles from './project.module.css'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { SiSwagger } from "react-icons/si";

function Project(props) {

    return (
        <div className={styles.Project}>
            <div className={styles.containerImage}>
                <img src={props.image} className={styles.image} alt="img" />
                <div className={styles.icons}>
                    <a style={{ display: props.linkProjeto === "" && 'none' }} rel="noreferrer" target='_blank' href={props.linkProjeto}>
                        <AiFillEye href={props.linkProjeto} className={styles.see}></AiFillEye>
                    </a>

                    <a style={{ display: props.linkGitHub === "" && 'none' }} rel="noreferrer" target='_blank' href={props.linkGitHub}>
                        <AiFillGithub className={styles.github}></AiFillGithub>
                    </a>

                    <a style={{ display: props.linkSwagger === "" && 'none' }} rel="noreferrer" target='_blank' href={props.linkSwagger}>
                        <SiSwagger className={styles.github}></SiSwagger>
                    </a>


                </div>

            </div>


            <div className={styles.descricao}>
                <h1 className={styles.titulo}> {props.titulo}</h1>
                <p>{props.descricao}</p>

                <div className={styles.technologies}>
                    {props.technologies.map((technologies, index) => (
                        <div className={styles.technologie} key={index}>
                            {technologies}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Project