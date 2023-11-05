import styles from './projects.module.css'
import Project from '../Project/Project'
import myfeira from '../../imageProjects/myfeira.PNG'
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiCss3, SiMongodb } from 'react-icons/si'
function PageProjects() {

    return (
        <div id="projects" className={styles.PageProjects}>
            <h1 className={styles.tituloProjects}>Meus projetos</h1>

            <Project
                image={myfeira}
                titulo={"MyFeira"}
                descricao={"O projeto My Feira é minha primeira experiência no desenvolvimento de uma API usando Node.js. Ele visa simplificar as compras de supermercado, atuando como um aplicativo de anotações para adicionar itens, especificar valores e quantidades, com cálculo automático do valor total. Utilizei React na parte frontal e uma API Node.js para interagir com o banco de dados MongoDB. Através da API, os clientes podem se cadastrar, fazer login, gerenciar listas de compras e acessar itens salvos. A API está hospedada na AWS e possui um domínio seguro (https://apimyfeira.online) com certificado de segurança pelo CloudFlare."}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <FaNodeJs className={styles.nodejs}></FaNodeJs>,
                    <SiMongodb className={styles.mongoDB}></SiMongodb>,
                    <FaAws className={styles.aws}></FaAws>]}
                linkProjeto={"https://myfeira.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/MyFeira"}
            ></Project>
        </div>
    )
}

export default PageProjects