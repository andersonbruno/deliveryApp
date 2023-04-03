import styles from './Store.module.scss';
import banner from '../../assets/itens/DEFAULT.png';
import { AiFillStar } from 'react-icons/ai';
import ItemCardStore from '../../components/ItemCardStore';
import { mockStores } from '../../mock/stores';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IStore } from '@/interfaces/IStore';
import { ParsedUrlQuery } from 'querystring'
import DefaultPage from '@/components/DefaultPage';

interface IParams extends ParsedUrlQuery {
    code: string;
}

interface IProps {
    store: IStore;
}

export default function Store ({ store } : IProps) {   
    if(store)
        return (
            <DefaultPage>
                <div className={styles.container}>
                    <div>
                        <Image className={styles.banner} src={banner} alt='banner'/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles['container-logo']}>
                            <Image className={styles.logo} src={store.image} alt={'Logo loja'}/>
                        </div>
                        <div className={styles.title}>
                            <h1>{store?.name} <span><AiFillStar/> {store.note}</span></h1>
                        </div>
                    </div>
                    <h2>Produtos</h2>
                    <div className={styles.items}>
                        {
                            store.items.map(item => {
                                return (
                                    <ItemCardStore 
                                        idItem={item.id}
                                        idStore={Number(store.id)}
                                        name={item.name} 
                                        description={item.description}
                                        image={item.image}
                                        price={item.price}
                                        key={item.id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>    
            </DefaultPage>
        );

}

export const getStaticProps: GetStaticProps = async (context) => {
    const { query } = context.params as IParams;

    const store = mockStores.find(store => (query && store.id.toString() === query));

    return {
        props: {
            store
        }   
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = mockStores.map(store => {
        return {
            params: {
                query: store.id.toString()
            }
        }        
    })

    return {
        paths: paths,
        fallback: false,
    }
}