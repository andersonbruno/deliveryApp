import styles from './Search.module.scss';
import { RiSearchLine } from "react-icons/ri";
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Search() {
    const router = useRouter();
    const [ search, setSearch ] = useState('');

    function searchItem(event: React.KeyboardEvent<HTMLInputElement> ): void {
        if (event.key === 'Enter' && event.currentTarget.value !== ''){
            setSearch('');
            router.push(`/search/${event.currentTarget.value}`);
        }
    }

    return (
        <div className={styles['container-input']}>
            <RiSearchLine className={styles.icon}/>
            <input 
                placeholder="Busque por um produto ou loja"
                className={styles.input}
                onKeyDown={(e) => searchItem(e)}
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
        </div>
    )
}