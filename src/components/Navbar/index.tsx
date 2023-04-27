import Link from 'next/link';
import Busca from '../Search';
import Carrinho from '../Bag';
import styles from './Navbar.module.scss';
import classnames from 'classnames';
import { useRouter } from 'next/router';

export default function Navbar() {
    const { asPath: location } = useRouter();

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                Delivery
            </div>
            <div className={styles.links}>
                <Link href='/' className={classnames(styles.link, {
                    [styles.selected]: location === '/' || location.includes('/search/')
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