import styles from './StoreCardItem.module.scss';
import { AiFillStar } from 'react-icons/ai';
import classNames from 'classnames';
//import { useNavigate } from 'react-router-dom';
import Image, { StaticImageData } from 'next/image';

interface StoreProps {
    id: number;
    name: string;
    category: string;
    image: string | StaticImageData;
    note: number;
    timeToDeliver: number;
}

export default function StoreCard (props: StoreProps) {
    const { id, name, category, image, note, timeToDeliver } = props;
    //const navigate = useNavigate();

    return (
        <div className={styles.container} onClick={() => console.log('/store/' + id)}>
            <div className={styles.image}>
                <Image src={image} alt={name}/>
            </div>
            <div className={styles.infos}>
                <div className={styles.title}>{name}</div>
                <div className={styles.info}>
                    <div className={classNames(styles.star, styles.note)}><AiFillStar/></div>
                    <div className={styles.note}>{note.toFixed(1)}</div>
                    <div className={styles.category}> • {category} • {timeToDeliver} minutos</div>
                </div>
            </div>
        </div>
    )
}