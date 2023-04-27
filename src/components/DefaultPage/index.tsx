import { useSelector } from 'react-redux';
import Modal from '../Modal';
import Navbar from '../Navbar';
import styles from './DefaultPage.module.scss';
import { RootState } from '../../store';

interface PageProps {
    children: React.ReactElement;
}

export default function DefaultPage( { children } : PageProps) {
    const modal = useSelector((state: RootState) => state.modal);

    return (
        <div className={styles.container}>            
            {
                modal.modalOpened ? <Modal {...modal}/> : <></>
            }
            <div className={styles.content}>
                <Navbar/>
                <div className={styles.containerOutlet}>
                    {
                        children
                    }
                </div>
                <div>
                    {
                        //footer
                    }
                </div>
            </div>
        </div>
    )
}