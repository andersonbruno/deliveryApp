import styles from './Modal.module.scss';
import { RiCloseLine, RiStore3Fill, RiSubtractLine, RiAddLine } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/reducers/modal';
import Image, { StaticImageData } from 'next/image';
//import { useNavigate } from 'react-router-dom';

interface IModalProps {
    itemId: number;
    itemName: string;
    itemDescription: string;
    itemPrice: number;
    itemImage: StaticImageData;
    storeId: number;
    storeName: string;
    storeNote: number;
    storeTimeToDeliver: number;
}

export default function Modal ({ itemId, itemName, itemDescription, itemPrice, itemImage, storeId, storeName, storeNote, storeTimeToDeliver } : IModalProps) {
    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    function redirectToStore(id: number): void {
        dispatch(closeModal());
        //navigate('/store/' + storeId);
    } 

    return (
        <div className={classNames(styles.modal, styles['modal-opened'])}>
            <div className={styles.content}>
                <div className={styles['modal-image']}>
                    <Image className={styles['produc-image']} src={itemImage} alt="Produto"/>
                </div>
                <div className={styles['modal-infos']}>
                    <div className={styles['modal-header']}>
                        <div className={styles['modal-title']}>{itemName}</div>
                        <div className={styles['modal-close']}><RiCloseLine onClick={() => dispatch(closeModal())}/></div>
                    </div>
                    <div className={styles['modal-content']}>
                        <div className={styles['modal-description']}>{itemDescription}</div>
                        <div className={styles['modal-price']}>R$ {itemPrice.toFixed(2)}</div>
                        <div className={styles['modal-store']} onClick={() => redirectToStore(storeId)}>
                            <div className={styles['modal-store-header']}>
                                <div className={styles['modal-store-name']}>
                                    <span><RiStore3Fill/></span> {storeName}
                                </div>
                                <div className={styles['modal-store-note']}>
                                    <AiFillStar/> {storeNote.toFixed(1)}
                                </div>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles['modal-store-price']}>
                                {storeTimeToDeliver} min
                            </div>
                        </div>
                        <div className={styles['modal-store-comment']}>
                            <span>Algum comentário?</span>
                            <textarea maxLength={140} rows={3}></textarea>
                        </div>
                    </div>
                    <div className={styles['modal-action']}>
                        <div className={styles['quantity-content']}>
                            <div>
                                <button 
                                    className={classNames(styles['quantity-button'] , { [styles['quantity-button-not-allow']]: quantity === 1 })} 
                                    onClick={() => setQuantity(quantity !== 1 ? quantity - 1 : quantity)}>
                                    <RiSubtractLine/>
                                </button>
                            </div>
                            <div className={styles['quantity-value']}>{quantity}</div>
                            <div>
                                <button className={styles['quantity-button']} onClick={() => setQuantity(quantity + 1)}>
                                    <RiAddLine/>
                                </button>
                            </div>
                        </div>
                        <button className={styles['button-add']}>
                            <div className={styles['button-content']}>
                                <span>Adicionar</span>
                                <span>R$ {(itemPrice * quantity).toFixed(2)}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}