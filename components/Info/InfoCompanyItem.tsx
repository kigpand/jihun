import { ICompany } from '../../interface/ICompany';
import styles from './InfoCompanyItem.module.scss';

interface ICompanyItem {
    company: ICompany;
    key: string;
}

const InfoCompanyItem = ({ company, key }: ICompanyItem) => {
    return (
        <div className={styles.companyItem}>
            <div className={styles.title}>{company.title} ({company.date})</div>
            <div className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.items}>
                        <div className={styles.itemTitle}>담당 업무</div>
                        <div className={styles.itemText}>
                            { company.work.map((work: string) => {
                                return <div key={work}>- {work}</div>
                            })}
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.itemTitle}>주요 기술</div>
                        <div className={styles.itemText}>
                            { company.stack.map((stack: string) => {
                                return <div key={stack}>- {stack}</div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    { company.content.map((content: string) => {
                        return <div key={content}>- {content}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default InfoCompanyItem;