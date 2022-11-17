import PortFolioSlide from '../PortFolioSlide/PortFolioSlide';
import styles from './PortFolio.module.scss';
import PortFolioHeader from './PortFolioHeader';

const PortFolio = () => {
    return (
        <div className={styles.portFolio}>
            <PortFolioHeader />
            <PortFolioSlide />
        </div>
    )
}

export default PortFolio;