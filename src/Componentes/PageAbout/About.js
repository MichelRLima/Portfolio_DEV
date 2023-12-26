import styles from './about.module.css'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import certificado1 from '../../imageCertificados/certificado1.jpg'
import certificado2 from '../../imageCertificados/certificado2.PNG'
import certificado3 from '../../imageCertificados/certificado3.PNG'
import certificado4 from '../../imageCertificados/certificado4.PNG'
import certificado5 from '../../imageCertificados/certificado5.PNG'
import certificado6 from '../../imageCertificados/certificado6.PNG'
import certificado7 from '../../imageCertificados/certificado7.PNG'
import certificado8 from '../../imageCertificados/certificado8.PNG'
import certificado9 from '../../imageCertificados/certificado9.PNG'
import certificado10 from '../../imageCertificados/certificado10.PNG'
import certificado11 from '../../imageCertificados/certificado11.PNG'
import certificado12 from '../../imageCertificados/certificado12.PNG'

function About() {

    const items = [
        <div className={styles.containerCertificado} data-value="1"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1mZz6bMdR1-GzMaY50sBjDkMWnNoOe09c/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado1}></img></a></div>,
        <div className={styles.containerCertificado} data-value="2"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1XX4FB7p2Cxqx6W4tpcKCZLQPfCX401NO/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado3}></img></a></div>,
        <div className={styles.containerCertificado} data-value="3"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1jNK-x8Fg4M7H3wEBahqDW20EkMVrzxGG/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado2}></img></a></div>,
        <div className={styles.containerCertificado} data-value="4"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1-ndPnqZkeI5DNtU0bjdhCldk_6DszZIx/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado4}></img></a></div>,
        <div className={styles.containerCertificado} data-value="5"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/124BFgywIuBzDtDadTToo4v7ESMA8VwDW/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado5}></img></a></div>,
        <div className={styles.containerCertificado} data-value="6"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1ouUzeSYmmr5ujU2ktodR-gGnGcLKftPX/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado6}></img></a></div>,
        <div className={styles.containerCertificado} data-value="7"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1_ppEMxNPUoH1RZ5uanuEwCly4nDBfDg-/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado7}></img></a></div>,
        <div className={styles.containerCertificado} data-value="8"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1QK4RujkrgVg8Q5dirR3mLFGXq4E-b-Ev/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado8}></img></a></div>,
        <div className={styles.containerCertificado} data-value="9"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1j2WPJmNy3ElB4pBOvjKX2v9NzKLdrFT4/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado9}></img></a></div>,
        <div className={styles.containerCertificado} data-value="10"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/10zcrL-WJBPh9EndAFiyFQ54nzJBSzq0n/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado10}></img></a></div>,
        <div className={styles.containerCertificado} data-value="11"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1WS6AnzM1_G4yLIl6rRzME36UbZXXWxdE/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado11}></img></a></div>,
        <div className={styles.containerCertificado} data-value="12"><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1WS6AnzM1_G4yLIl6rRzME36UbZXXWxdE/view?usp=sharing'><img alt='Certificado' className={styles.certificado} src={certificado12}></img></a></div>,
    ];

    function obterDataAtual() {


        const dataAtual = new Date();
        const nascimento = new Date("1998-12-14")
        const anos = Math.floor((dataAtual - nascimento) / 31536000000);
        return anos;


    }



    return (
        <div id="about" className={styles.about}>
            <h1>Sobre mim</h1>
            <div className={styles.containerDescricao}>
                <div className={styles.descricaoleft}>
                    <p className={styles.descricao}>Olá, sou Michel, tenho {obterDataAtual()} anos e sou um estudante de Análise e Desenvolvimento de Sistema que mora em Natal, no Rio Grande do Norte. Minha paixão pelo mundo da programação me levou a mergulhar profundamente no desenvolvimento backend, onde encontro os desafios mais empolgantes.</p>
                    <p className={styles.descricao}>Trabalho com uma variedade de linguagens, porém atualmente trabalho principal com React.js e Node.js, que me permitiu explorar a versatilidade da tecnologia. Meu projeto mais significativo até o momento é o WebApp My Feira, onde liderei o desenvolvimento do frontend com React e criei uma API no backend usando Node.js para se comunicar com o MongoDB. Adquiri até mesmo um domínio e hospedei a API na AWS.</p>
                </div>
                <div className={styles.descricaoright}>
                    <p className={styles.descricao}>Meu objetivo como desenvolvedor web é continuar aprimorando minhas habilidades, adquirir o máximo de experiência possível e me tornar um profissional de excelência. Estou sempre disposto a abraçar desafios que envolvam desenvolver ideias a partir do zero.</p>
                    <p className={styles.descricao}>Uma de minhas qualidades pessoais é a tranquilidade sob pressão, o que me permite enfrentar desafios de maneira calma e eficiente. A paixão pela aprendizagem e a determinação em nunca desistir são qualidades que acredito que contribuem para o meu sucesso como desenvolvedor. Além disso, estou sempre aberto a novas ideias e colaborações no mundo da tecnologia, e estou ansioso para o que o futuro reserva.</p>
                    <p className={styles.descricao}></p>
                </div>

            </div>
            <h4>Alguns certificados</h4>
            <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={4000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                disableDotsControls
                touchTracking={false}
                items={items}
            />


        </div>
    )
}

export default About