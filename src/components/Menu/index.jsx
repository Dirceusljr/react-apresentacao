import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
            <MenuLink to='/'>
                    Saudação
                </MenuLink>
                <MenuLink to='exemplo1'>
                    Exemplo1
                </MenuLink>
                <MenuLink to='exemplo2'>
                    Exemplo2
                </MenuLink>
            </nav>
        </header>
    )
    }