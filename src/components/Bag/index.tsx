import classNames from "classnames";
import { RiHandbagLine } from "react-icons/ri";
import styles from './Bag.module.scss';
import { useSelector } from "react-redux";
import { RootState } from '../../store';

export default function Bag() {
    const bag = useSelector((state: RootState) => state.bag);

    return (
        <div className={classNames(styles.container, {
            [styles.bagWithItens]: bag.TotalItems
        })} onClick={() => console.log(bag)}>
            <RiHandbagLine className={styles.icon}/>
            <div className={styles.value}>
                <div>R$ {bag.TotalPrice.toFixed(2)}</div>
                <div>{bag.TotalItems} Itens</div>
            </div>
        </div>
    )
}