import { companies } from '../../common/company';
import { ICompany } from '../../interface/ICompany';
import styles from './InfoCompany.module.scss';
import InfoCompanyItem from './InfoCompanyItem';

const InfoCompany = () => {
    return (
        <div className={styles.company}>
            <div className={styles.title}>
                <div className={styles.titleItem}>&lt;Career &gt;</div>
            </div>
            { companies.map((company: ICompany) => {
                return <InfoCompanyItem company={company} key={company.title} />
            })}
        </div>
    )
}

export default InfoCompany;