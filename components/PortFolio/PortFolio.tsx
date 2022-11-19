import PortFolioSlide from '../PortFolioSlide/PortFolioSlide';
import styles from './PortFolio.module.scss';
import PortFolioBody from './PortFolioBody';
import PortFolioBtns from './PortFolioBtns';
import PortFolioHeader from './PortFolioHeader';

const PortFolio = () => {
    return (
        <div className={styles.portFolio}>
            <PortFolioHeader />
            {/* <PortFolioSlide /> */}
            <PortFolioBody />
            <PortFolioBtns />
        </div>
    )
}

export default PortFolio;