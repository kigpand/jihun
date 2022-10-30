import { IModalItem } from '../../../interface/IModalItem';
import styles from './InfoModalItem.module.scss';

const InfoModalItem = ({ title, text}: IModalItem) => {
    return (
        <div className={styles.infoItem}>
            <div className={styles.infoTitle}>{title}</div>
            <div className={styles.infoText}>{text}</div>
        </div>
    )
}

export default InfoModalItem;