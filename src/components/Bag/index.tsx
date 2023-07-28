import classNames from "classnames";
import { RiHandbagLine } from "react-icons/ri";
import styles from './Bag.module.scss';
import { useSelector } from "react-redux";
import { RootState } from '../../store';
import BagSideBar from "../BagSideBar";
import { useState } from "react";

export default function Bag() {
    const bag = useSelector((state: RootState) => state.bag);
    const [bagIsVisible, setBagIsVisible] = useState(false);
    
    return (
        <>
            <BagSideBar isVisible={bagIsVisible}/>
            <div className={classNames(styles.container, {
                [styles.bagWithItens]: bag.TotalItems
            })} onClick={() => setBagIsVisible(!bagIsVisible)}>
                <RiHandbagLine className={styles.icon}/>
                <div className={styles.value}>
                    <div>R$ {bag.TotalPrice.toFixed(2)}</div>
                    <div>{bag.TotalItems} Itens</div>
                </div>
            </div>
        </>
    )
}