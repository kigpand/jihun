import styles from './PortFolio.module.scss';
import PortFolioHeader from './PortFolioHeader';

const PortFolio = () => {
    return (
        <div className={styles.portFolio}>
            <PortFolioHeader />
        </div>
    )
}

export default PortFolio;