import { IInfoItem } from '../../../interface/IInfoItem';
import styles from './InfoModalItem.module.scss';

const InfoModalItem = ({ title, text}: IInfoItem) => {
    return (
        <div className={styles.infoItem}>
            <div className={styles.infoTitle}>{title}</div>
            <div className={styles.infoText}>{text}</div>
        </div>
    )
}

export default InfoModalItem;