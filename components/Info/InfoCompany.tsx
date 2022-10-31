import styles from './InfoCompany.module.scss';
import InfoCompanyItem from './InfoCompanyItem';

const InfoCompany = () => {
    return (
        <div className={styles.company}>
            <div className={styles.title}>
                <div className={styles.titleItem}>&lt;Career &gt;</div>
            </div>
            <InfoCompanyItem />
        </div>
    )
}

export default InfoCompany;