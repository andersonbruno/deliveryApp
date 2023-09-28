import classNames from "classnames";
import { RiHandbagLine } from "react-icons/ri";
import styles from './Bag.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store';
import BagSideBar from "../BagSideBar";
import { toggle } from "@/store/reducers/bagSideBar";

export default function Bag() {
    const bag = useSelector((state: RootState) => state.bag);
    const dispatch = useDispatch();
    
    return (
        <>
            <BagSideBar/>
            <div className={classNames(styles.container, {
                [styles.bagWithItens]: bag.TotalItems
            })} onClick={() => dispatch(toggle())}>
                <RiHandbagLine className={styles.icon}/>
                <div className={styles.value}>
                    <div>R$ {bag.TotalPrice.toFixed(2)}</div>
                    <div>{bag.TotalItems} Itens</div>
                </div>
            </div>
        </>
    )
}