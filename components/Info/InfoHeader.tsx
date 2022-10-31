import { infoObj } from '../../common/infoObj';
import { IInfoItem } from '../../interface/IInfoItem';
import styles from './InfoHeader.module.scss';
import InfoHeaderItem from './InfoHeaderItem';

const InfoHeader = () => {
    return (
        <div className={styles.infoHeader}>
            <div className={styles.title}>
                <div className={styles.titleItem}>&lt;Info &gt;</div>
            </div>
            <div className={styles.main}>
                <div className={styles.img}></div>
                <div className={styles.info}>
                    { infoObj.map((info: IInfoItem) => {
                        return <InfoHeaderItem title={info.title} text={info.text} key={info.title} />
                    })}
                </div>
            </div>
            <div className={styles.infoLine} />
        </div>
    )
}

export default InfoHeader;