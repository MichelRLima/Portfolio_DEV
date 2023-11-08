import React, { useState } from 'react';
import styles from './PageHeader.module.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
function PageHeader() {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);


    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);

    };



    return (
        <div className={styles.ContainerHeader}>
            <div className={styles.containerLogo}></div>
            <div className={styles.containerBar}>
                <ul>
                    <li><Link to="PageBody" smooth={true} duration={500} offset={-75}>Início</Link></li>
                    <li><Link to="about" smooth={true} duration={500} offset={-120}>Sobre</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} offset={-120}>Projetos</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contato</Link></li>
                </ul>
            </div>
            <FaBars className={styles.iconBars} onClick={toggleMobileMenu} />
            {isMobileMenuVisible && (
                <div className={styles.menuMobile}>
                    <ul>
                        <li ><Link onClick={toggleMobileMenu} to="PageBody" smooth={true} duration={500} offset={-200} >Início</Link></li>
                        <li ><Link onClick={toggleMobileMenu} to="about" smooth={true} duration={500} offset={-230}>Sobre</Link></li>
                        <li><Link onClick={toggleMobileMenu} to="projects" smooth={true} duration={500} offset={-240}>Projetos</Link></li>
                        <li><Link onClick={toggleMobileMenu} to="contact" smooth={true} duration={500}>Contato</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PageHeader;
