import { useDispatch, useSelector } from 'react-redux';
import styles from './BagSideBar.module.scss';
import classNames from 'classnames';
import { RootState } from '@/store';
import { removeItem, clearBag } from '../../store/reducers/bag';
import { RiHandbagLine } from "react-icons/ri";

interface BagProps {
    isVisible: boolean;
}

export default function BagSideBar({ isVisible } : BagProps) {
    const bag = useSelector((state: RootState) => state.bag);
    const dispatch = useDispatch();

    const { TotalPrice, items, storeName } = bag;

    function removeItemFromBag(id: number, quantity: number, price: number) {
        dispatch(removeItem({id, price, quantity}));
    }

    function clearBagg(){
        dispatch(clearBag());
    }

    return (
        <div className={classNames(styles.content, {
            [styles.hide]: !isVisible
        }) }>
            {
                items.length != 0 ? (
                    <>
                        <div className={styles.header}>
                            <span>Seu pedido em</span>
                            <h3>{ storeName }</h3>
                        </div>
                        <div className={styles.itemsList}>
                            {
                                items.map((item, index) => (
                                    <div key={index}>
                                        <hr/>
                                        <div className={styles.itemsListHeader}>
                                            <span className={styles.titleHeader}>{ item.name }</span>
                                            <span>R$ { item.price.toFixed(2) }</span>
                                        </div>
                                        <div className={styles.itemsListDescription}>
                                            { item.description }
                                        </div>
                                        <span className={styles.removeButton} onClick={() => removeItemFromBag(item.id, item.quantity, item.price)}>Remover</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.info}>
                            <hr/>
                            <div className={styles.subtotal}>
                                <span>Subtotal</span>
                                <span>R$ { TotalPrice.toFixed(2) }</span>
                            </div>
                            <div className={styles.entrega}>
                                <span>Taxa de entrega</span>
                                <span>Grátis</span>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.total}>
                                <span>Total</span>
                                <span>R$ { TotalPrice.toFixed(2) }</span>
                            </div>
                            <button onClick={() => clearBagg()}>Finalizar pedido</button>
                        </div>
                    </>
                ) : (
                    <div className={styles.emptyBag}>
                        <div>
                            <span>Sua sacola está vazia.</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}