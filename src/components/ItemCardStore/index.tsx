import Image from 'next/image';
import { openModal } from '../../store/reducers/modal';
import styles from './ItemCardStore.module.scss';
import { useDispatch } from 'react-redux';

interface ItemProps {
    name: String;
    description: String;
    image: string;
    price: number;
    idItem: number;
    idStore: number;
}

export default function ItemCardStore ({ name, description, image, price, idItem, idStore }: ItemProps) {
    const dispatch = useDispatch();

    return (
        <div className={styles.container} onClick={() => dispatch(openModal({idItem, idStore}))}>
            <div className={styles.infos}>
                <div className={styles.title}>
                    <h3>{name}</h3>
                </div>
                <div className={styles.info}>
                    <div>
                        {description}
                    </div>
                </div>
                <div className={styles.price}>
                    R$ {price.toFixed(2)}
                </div>
            </div>
            <div className={styles.image}>
                <Image src={image} alt='Churrasco'/>
            </div>
        </div>
    );
}