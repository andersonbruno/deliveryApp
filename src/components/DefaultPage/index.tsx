import { useSelector } from 'react-redux';
//import { Outlet } from 'react-router-dom';
import Modal from '../Modal';
import Navbar from '../Navbar';
import styles from './DefaultPage.module.scss';
import { RootState } from '../../store';

interface pageProps {
    children: React.ReactElement;
}

export default function DefaultPage( { children } : pageProps) {
    const modal = useSelector((state: RootState) => state.modal);

    return (
        <div style={{position:'relative'}}>            
            {
                modal.modalOpened ? <Modal {...modal}/> : <></>
            }
            <div className={styles.container}>
                <Navbar/>
                <div className={styles.containerOutlet}>
                    {
                        children
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}