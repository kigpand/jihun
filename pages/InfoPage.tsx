import InfoCompany from '../components/Info/InfoCompany';
import InfoHeader from '../components/Info/InfoHeader';
import styles from '../styles/Home.module.scss';

const InfoPage = () => {
    return (
        <div className={styles.infoPage}>
            <InfoHeader />
            <InfoCompany />
        </div>
    )
}

export default InfoPage;