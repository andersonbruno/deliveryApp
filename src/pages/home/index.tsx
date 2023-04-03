import StoreCard from '../../components/StoreCard';
import styles from './Home.module.scss';
import { mockStores } from '../../mock/stores';
import DefaultPage from "@/components/DefaultPage";

export default function Home () {
    return (
        <DefaultPage>
            <div className={styles.header}>
                <h3>Lojas</h3>
                <div className={styles.stores}>
                    {
                        mockStores.map((store) => {
                            return <StoreCard 
                                name={store.name}
                                note={store.note}
                                timeToDeliver={store.timeToDeliver} 
                                category={store.category} 
                                image={store.image}
                                id={store.id}
                                key={store.id}
                            />
                        })
                    }
                </div>
            </div>
        </DefaultPage>
    )
}