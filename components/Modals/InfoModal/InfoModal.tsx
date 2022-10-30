import Link from 'next/link';
import styles from './InfoModal.module.scss';

const InfoModal = () => {
    return (
        <div className={styles.infoModal}>
            <div className={styles.header}>
                <div className={styles.img}></div>
            </div>
            <Link href={'/InfoPage'} className={styles.footer}>자세히 알아보기...</Link>
        </div>
    )
}

export default InfoModal;