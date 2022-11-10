import PortFolioHeader from '../components/PortFolio/PortFolioHeader';
import PortFolioText from '../components/PortFolio/PortFolioText';
import PortFolioSlide from '../components/PortFolioSlide/PortFolioSlide';
import styles from '../styles/Home.module.scss';

const PortFolioPage = () => {
    return (
        <div className={styles.portFolioPage}>
            <PortFolioHeader />
            <PortFolioSlide />
            <PortFolioText />
        </div>
    )
}

export default PortFolioPage;