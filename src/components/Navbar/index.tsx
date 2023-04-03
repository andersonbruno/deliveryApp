import Link from 'next/link';
import Busca from '../Search';
import Carrinho from '../Bag';
import styles from './Navbar.module.scss';
import classnames from 'classnames';

export default function Navbar() {
    const location = {
        pathname: 'something'
    };
    
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                Delivery
            </div>
            <div className={styles.links}>
                <Link href='/' className={classnames(styles.link, {
                    [styles.selected]: location.pathname === '/' || location.pathname.includes('/search/')
                })}>
                    Início
                </Link>
                <Link href='/' className={styles.link}>Restaurante</Link> 
                <Link href='/' className={styles.link}>Mercado</Link> 
                <Link href='/' className={styles.link}>Farmácia</Link> 
            </div>
            <div className='busca'>
                <Busca/>
            </div>
            <div className='icones'>
                <Carrinho/>
            </div>
        </div>
    )
}