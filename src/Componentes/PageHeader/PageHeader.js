import React, { useState } from 'react';
import styles from './PageHeader.module.css';
import { FaBars } from 'react-icons/fa';

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
                    <li>Work</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <FaBars className={styles.iconBars} onClick={toggleMobileMenu} />
            {isMobileMenuVisible && (
                <div className={styles.menuMobile}>
                    <ul>
                        <li>Work</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PageHeader;
