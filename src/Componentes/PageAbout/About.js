import styles from './about.module.css'



function About() {


    return (
        <div id="about" className={styles.about}>
            <h1>Sobre</h1>
            <div className={styles.containerDescricao}>
                <div className={styles.descricaoleft}>
                    <p className={styles.descricao}>Olá, sou Michel, um estudante de Análise e Desenvolvimento de Sistema que mora em Natal, no Rio Grande do Norte. Minha paixão pelo mundo da programação me levou a mergulhar profundamente no desenvolvimento backend, onde encontro os desafios mais empolgantes.</p>
                    <p className={styles.descricao}>Trabalhar com uma variedade de linguagens, porém atualmente trabalho principal com React.js e Node.js, que me permitiu explorar a versatilidade da tecnologia. Meu projeto mais significativo até o momento é o WebApp My Feira, onde liderei o desenvolvimento do frontend com React e criei uma API no backend usando Node.js para se comunicar com o MongoDB. Adquiri até mesmo um domínio e hospedei a API na AWS.</p>
                </div>
                <div className={styles.descricaoright}>
                    <p className={styles.descricao}>Meu objetivo como desenvolvedor web é continuar aprimorando minhas habilidades, adquirir o máximo de experiência possível e me tornar um profissional de excelência. Estou sempre disposto a abraçar desafios que envolvam desenvolver ideias a partir do zero.</p>
                    <p className={styles.descricao}>Uma de minhas qualidades pessoais é a tranquilidade sob pressão, o que me permite enfrentar desafios de maneira calma e eficiente. A paixão pela aprendizagem e a determinação em nunca desistir são qualidades que acredito que contribuem para o meu sucesso como desenvolvedor. Além disso, estou sempre aberto a novas ideias e colaborações no mundo da tecnologia, e estou ansioso para o que o futuro reserva.</p>
                    <p className={styles.descricao}></p>
                </div>


            </div>

        </div>
    )
}

export default About