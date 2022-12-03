import PortFolioSlide from '../../PortFolioSlide/PortFolioSlide';
import styles from './PortFolioModal.module.scss';
import PortFolioModalBtn from './PortFolioModalBtn';

const PortFolioModal = () => {

    return (
        <div className={styles.portFolioModal}>
            <div className={styles.titleContainer}>
                <div className={styles.modalTitle}>&lt;PortFolio /&gt;</div>
            </div>
            <div className={styles.main}>
                <PortFolioModalBtn />
                <PortFolioSlide />
            </div>
        </div>
    )
}

export default PortFolioModal;