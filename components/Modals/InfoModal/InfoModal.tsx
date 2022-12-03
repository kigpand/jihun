import Link from 'next/link';
import { infoObj } from '../../../common/infoObj';
import { IInfoItem } from '../../../interface/IInfoItem';
import styles from './InfoModal.module.scss';
import InfoModalItem from './InfoModalItem';
import ME from '../../../imgs/me.jpg';
import Image from 'next/image';

const InfoModal = () => {
    return (
        <div className={styles.infoModal}>
            <div className={styles.titleContainer}>
                <div className={styles.modalTitle}>&lt;Info /&gt;</div>
            </div>
            <div className={styles.myInfo}>
                <Image src={ME} alt='github' width={150} height={150} style={{ borderRadius: '50%'}}></Image>
                <div className={styles.info}>
                    { infoObj.map((info: IInfoItem) => {
                        return <InfoModalItem title={info.title} text={info.text} key={info.title} />
                    })}
                </div>
            </div>
            <div className={styles.horiLine}></div>
            <div className={styles.careerContainer}>
                <div className={styles.careerTitle}>&lt;Career /&gt;</div>
                <div className={styles.careerText}>
                    <div className={styles.period}>2021.04.01 ~ 2021.10.01</div>
                    <div className={styles.company}>창소프트아이앤아이</div>
                </div>
                <div className={styles.careerText}>
                    <div className={styles.period}>2021.11.01 ~ </div>
                    <div className={styles.company}>Dabeeo</div>
                </div>
            </div>
            <div  className={styles.footer}>
                <Link href={'/InfoPage'}>자세히 알아보기...</Link>
            </div>
        </div>
    )
}

export default InfoModal;