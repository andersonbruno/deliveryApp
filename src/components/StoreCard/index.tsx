import styles from './StoreCard.module.scss';
import { AiFillStar } from 'react-icons/ai';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

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
    const router = useRouter();

    return (        
        <div className={classNames(styles.container, styles.grow)} onClick={() => router.push(`/store/${id}`)}>
            <div className={styles.image}>
                <Image src={image} alt={name}/>
            </div>
            <div className={styles.infos}>
                <div className={classNames(styles.info, styles.title)}>{name}</div>
                <div className={styles.info}>
                    <div className={classNames(styles.star, styles.note)}><AiFillStar/></div>
                    <div className={styles.note}>{note.toFixed(1)}</div>
                    <div className={styles.category}> • {category}</div>
                </div>
                <div className={styles.info}>{timeToDeliver} minutos</div>
            </div>
        </div>        
    )
}