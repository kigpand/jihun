import styles from './InfoCompanyItem.module.scss';

const InfoCompanyItem = () => {
    return (
        <div className={styles.companyItem}>
            <div className={styles.title}>창소프트아이앤아이 (2021.04.01 ~ 2021.10.01)</div>
            <div className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.items}>
                        <div className={styles.itemTitle}>담당 업무</div>
                        <div className={styles.itemText}>
                            <div>- Front-end 개발</div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.itemTitle}>주요 기술</div>
                        <div className={styles.itemText}>
                            <div>- Javascript</div>
                            <div>- React</div>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>asdas</div>
            </div>
        </div>
    )
}

export default InfoCompanyItem;