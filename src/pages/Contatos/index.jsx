import styles from "./Contatos.module.css"
import { GoMail } from "react-icons/go"
import { FaInstagram } from "react-icons/fa";
import { PiGitlabLogoLight } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

function Contatos() {
  return (
    <>
      <section className={styles.contatos}>
        <h2>Contatos</h2>
        <h3>Ente em contato</h3>
        <p>Para que possamos conversar mais sobre.</p>

        <div className={styles.icones}>
          <a href="mailto:capelete.denis@gmail.com" target="_blank" rel="noopener noreferrer">
            <GoMail className={styles.icone} />
          </a>
          <a href="https://www.instagram.com/denis_ce5" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icone} />
          </a>
          <a href="https://github.com/deniscapelete" target="_blank" rel="noopener noreferrer">
            <LuGithub className={styles.icone} />
          </a>
          <a href="https://gitlab.com/denis_ce5" target="_blank" rel="noopener noreferrer">
            <PiGitlabLogoLight className={styles.icone} />
          </a>
          <a href="https://www.linkedin.com/in/denis-capelete-evangelista-902539233/" target="_blank" rel="noopener noreferrer">
            <SlSocialLinkedin className={styles.icone} />
          </a>
        </div>
      </section>
    </>
  )
}

export default Contatos
