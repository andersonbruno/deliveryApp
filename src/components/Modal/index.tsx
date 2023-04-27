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
        <div className={classNames(styles.modal, styles.modalOpened)}>
            <div className={styles.content}>
                <div className={styles.modalImage}>
                    <Image className={styles.productImage} src={itemImage} alt="Produto"/>
                </div>
                <div className={styles.modalInfos}>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalTitle}>{itemName}</div>
                        <div className={styles.modalClose}><RiCloseLine onClick={() => dispatch(closeModal())}/></div>
                    </div>
                    <div className={styles.modalContent}>
                        <div className={styles.modalDescription}>{itemDescription}</div>
                        <div className={styles.modalPrice}>R$ {itemPrice.toFixed(2)}</div>
                        <div className={styles.modalStore} onClick={() => redirectToStore(storeId)}>
                            <div className={styles.modalStoreHeader}>
                                <div className={styles.modalStoreName}>
                                    <span><RiStore3Fill/></span> {storeName}
                                </div>
                                <div className={styles.modalStoreNote}>
                                    <AiFillStar/> {storeNote.toFixed(1)}
                                </div>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.modalStorePrice}>
                                {storeTimeToDeliver} min
                            </div>
                        </div>
                        <div className={styles.modalStoreComment}>
                            <span>Algum comentário?</span>
                            <textarea maxLength={140} rows={3}></textarea>
                        </div>
                    </div>
                    <div className={styles.modalAction}>
                        <div className={styles.quantityContent}>
                            <div>
                                <button 
                                    className={classNames(styles.quantityButton , { [styles.quantityButtonNotAllow]: quantity === 1 })} 
                                    onClick={() => setQuantity(quantity !== 1 ? quantity - 1 : quantity)}>
                                    <RiSubtractLine/>
                                </button>
                            </div>
                            <div className={styles.quanityValue}>{quantity}</div>
                            <div>
                                <button className={styles.quantityButton} onClick={() => setQuantity(quantity + 1)}>
                                    <RiAddLine/>
                                </button>
                            </div>
                        </div>
                        <button className={styles.buttonAdd}>
                            <div className={styles.buttonContent}>
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