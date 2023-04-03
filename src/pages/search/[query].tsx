import styles from './Search.module.scss';
import ItemCard from '../../components/ItemCard';
import StoreCardItem from '../../components/StoreCardItem';
import StoreCard from '../../components/StoreCard';
import { useState } from 'react';
import { mockStores } from '../../mock/stores';
import classNames from 'classnames';
import DefaultPage from '@/components/DefaultPage';
import { useRouter } from 'next/router';

export default function Search () {
    const router = useRouter();
    const { query } = router.query;

    const result = query as string;

    enum Store {
        Tab1 =0,
        Tab2 =1
    }
    
    const [ tab, setTab ] = useState(Store.Tab1);

    const tabStores = mockStores.filter((store) => {
        const hasStore = result !== undefined && store.name.toLocaleLowerCase().includes(result.toLocaleLowerCase());

        const resultItem = store.items.filter((item) => {
            return result !== undefined && item.name.toUpperCase().includes(result.toLocaleUpperCase())
        })

        if(resultItem.length > 0 || hasStore){
            return true;
        }

        return false;
    });

    const tabItems = mockStores.filter((store) => {
        const resultItem = store.items.filter((item) => {
            return result !== undefined && item.name.toUpperCase().includes(result.toLocaleUpperCase())
        })

        if(resultItem.length > 0){
            return true;
        }

        return false;
    });

    const SelectedTab = {
        [Store.Tab1]: <div className={styles.stores}>
            {
                tabStores.length ?
                tabStores.map((store) => {
                    return (
                        <StoreCard 
                        name={store.name}
                        id={store.id}
                        note={store.note}
                        timeToDeliver={store.timeToDeliver}
                        category={store.category}
                        image={store.image}
                        key={store.id}
                        />
                    )
                })
                :<h3 className={styles.result}>Nenhum resultado encontrado.</h3>
            }
        </div>       
        ,
        [Store.Tab2]:  
        <>
            { tabItems.length ?
                tabItems.map((restaurant) => {
                return (
                    <div key={restaurant.id}>
                        <StoreCardItem
                            id={restaurant.id}
                            name={restaurant.name}
                            note={restaurant.note}
                            timeToDeliver={restaurant.timeToDeliver}
                            category={restaurant.category}
                            image={restaurant.image}
                        />
                        <div className={styles['items-card']}>
                            {
                                    restaurant.items.map((itemDetail) => {  
                                    return (<ItemCard 
                                        idItem={itemDetail.id}
                                        idStore={restaurant.id}
                                        name={itemDetail.name}
                                        image={itemDetail.image}
                                        price={itemDetail.price}
                                        key={itemDetail.id}
                                    />)
                                })
                            }
                        </div>
                    </div>
                )
            }) : <h3 className={styles.result}>Nenhum resultado encontrado.</h3>}
        </>
    }

    return (
        <DefaultPage>
            <div className={styles.header}>
                <h2>Buscando por <span>{result}</span></h2>
                <div className={styles['search-nav']}>
                    <button className={classNames(styles['search-button'], { [styles['search-button-selected']]: tab === Store.Tab1 })} onClick={() => setTab(Store.Tab1)}>Lojas</button>
                    <button className={classNames(styles['search-button'], { [styles['search-button-selected']]: tab === Store.Tab2 })} onClick={() => setTab(Store.Tab2)}>Itens</button>
                </div>
                <div>
                {SelectedTab[tab]}
                </div>
            </div>
        </DefaultPage>
    )
}