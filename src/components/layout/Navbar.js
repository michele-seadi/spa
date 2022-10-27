import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/logo.png'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt="Zetta"/></Link>
               <ul className={styles.list}>
                <li className={styles.item}>
                     <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/abaut">Sobre</Link>
                </li>
                <li className={styles.item}>
                <Link to="/courses">Cursos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contact">Contato</Link>
                </li>
               </ul>
            </Container>
        </nav>
    )
}

export default Navbar