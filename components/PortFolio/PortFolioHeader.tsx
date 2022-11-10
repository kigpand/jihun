import PortFolioBtns from './PortFolioBtns';
import styles from './PortFolioHeader.module.scss';

const PortFolioHeader = () => {
    return (
        <div className={styles.portFolioHeader}>
            <div className={styles.title}>
                <div className={styles.titleItem}>&lt;PortFolio /&gt;</div>
            </div>
            <PortFolioBtns />
        </div>
    )
}

export default PortFolioHeader;