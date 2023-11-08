import styles from './contact.module.css'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'


function Contact() {

    return (
        <div id="contact" className={styles.Contact}>
            <h1 className={styles.Titulo}>Fale comigo</h1>

            <div className={styles.contatos}>
                <div className={styles.contato}>
                    <a target='_blanck' href='https://www.linkedin.com/in/michel-rocha-01b550210/'><AiFillLinkedin className={styles.linkedin}></AiFillLinkedin></a>
                    <a target='_blanck' href='https://www.linkedin.com/in/michel-rocha-01b550210/'><p>Michel Rocha</p></a>
                </div>

                <div className={styles.contato}>
                    <a target='_blanck' href='https://github.com/MichelRLima'><AiFillGithub className={styles.github}></AiFillGithub></a>
                    <a target='_blanck' href='https://github.com/MichelRLima'><p>Michel Rocha</p></a>
                </div>

                <div className={styles.contato}>
                    <a target='_blanck' href='https://api.whatsapp.com/send/?phone=5584998120957&text&type=phone_number&app_absent=0'><AiOutlineWhatsApp className={styles.wpp}></AiOutlineWhatsApp></a>
                    <p>84 99812-0957</p>
                </div>

                <div className={styles.contato}>
                    <AiOutlineMail className={styles.email}></AiOutlineMail>
                    <p>michelrocha502@gmail.com</p>
                </div>



            </div>
        </div>
    )
}

export default Contact