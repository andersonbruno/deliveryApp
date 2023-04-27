import Link from 'next/link';
import Search from '../Search';
import Bag from '../Bag';
import styles from './Navbar.module.scss';
import classnames from 'classnames';
import { useRouter } from 'next/router';

export default function Navbar() {
    const { asPath: location } = useRouter();

    return (
        <div className={styles.header}>
            <section className={styles.content}>
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
                        <Link href='/' className={classnames(styles.link, {
                            [styles.selected]: location.includes('/store')
                        })}>
                            Restaurantes
                        </Link>
                    </div>
                </div>
                <div className={styles.search}>
                    <Search/>
                </div>
                <div className={styles.bag}>
                    <Bag/>
                </div>
            </section>
        </div>
    )
}