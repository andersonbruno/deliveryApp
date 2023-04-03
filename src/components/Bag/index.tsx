import classNames from "classnames";
import { RiHandbagLine } from "react-icons/ri";
import styles from './Bag.module.scss';

export default function Bag() {
    return (
        <div className={classNames(styles.container, {
            [styles['bag-with-item']]: true
        })}>
            <RiHandbagLine className={styles.icon}/>
            <div className={styles.value}>
                <div>R$ 0,00</div>
                <div>0 Itens</div>
            </div>
        </div>
    )
}