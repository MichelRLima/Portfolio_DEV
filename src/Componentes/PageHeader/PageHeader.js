import React, { useState, useEffect } from 'react';
import styles from './PageHeader.module.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from "react-icons/fa";
function PageHeader() {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Defina as posições de cada seção com base na sua estrutura de página
        const positions = {
            PageBody: 0,
            about: document.getElementById('about').offsetTop - 200,
            projects: document.getElementById('projects').offsetTop - 230,
            contact: document.getElementById('contact').offsetTop - 230,
        }
        console.log()

        // Verifique qual link está ativo com base na posição de rolagem
        let active = null;
        for (const section in positions) {
            if (scrollPosition >= positions[section]) {
                active = section;
            }
        }
        setActiveLink(active);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDivClick = () => {
        window.open('https://www.linkedin.com/in/michel-rocha-01b550210/', '_blank');
    };

    return (
        <div className={styles.ContainerHeader}>
            <div className={styles.containerLogo} onClick={handleDivClick}></div>
            <div className={styles.containerBar}>

                <ul>
                    <li className={styles.link}>
                        <Link
                            to="PageBody"
                            smooth={true}
                            duration={500}
                            offset={-75}
                            spy={true}
                            activeClass="active-link"
                            className={activeLink === 'PageBody' ? 'active-link' : ''}
                        >
                            Início
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-120}
                            spy={true}
                            activeClass="active-link"
                            className={activeLink === 'about' ? 'active-link' : ''}
                        >
                            Sobre
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-120}
                            spy={true}
                            activeClass="active-link"
                            className={activeLink === 'projects' ? 'active-link' : ''}
                        >
                            Projetos
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-120}
                            spy={true}
                            activeClass="active-link"
                            className={activeLink === 'contact' ? 'active-link' : ''}
                        >
                            Contato
                        </Link>
                    </li>
                </ul>
                <div className={styles.containerItensContato}>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/michel-rocha-01b550210/'><FaLinkedin className={styles.linkedin} /></a>
                    <a target='_blank' rel="noreferrer" href='https://github.com/MichelRLima'> <FaGithub className={styles.github} /> </a>
                </div>

            </div>

            <FaBars className={styles.iconBars} onClick={toggleMobileMenu} />
            {isMobileMenuVisible && (
                <div className={styles.menuMobile}>
                    <ul>
                        <li>
                            <Link
                                onClick={toggleMobileMenu}
                                to="PageBody"
                                smooth={true}
                                duration={500}
                                offset={-200}
                                spy={true}
                                activeClass="active-link"
                                className={activeLink === 'PageBody' ? 'active-link' : ''}
                            >
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMobileMenu}
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-230}
                                spy={true}
                                activeClass="active-link"
                                className={activeLink === 'about' ? 'active-link' : ''}
                            >
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMobileMenu}
                                to="projects"
                                smooth={true}
                                duration={500}
                                offset={-240}
                                spy={true}
                                activeClass="active-link"
                                className={activeLink === 'projects' ? 'active-link' : ''}
                            >
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMobileMenu}
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-240}
                                spy={true}
                                activeClass="active-link"
                                className={activeLink === 'contact' ? 'active-link' : ''}
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PageHeader;
