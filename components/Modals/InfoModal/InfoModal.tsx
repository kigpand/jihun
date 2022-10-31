import Link from 'next/link';
import { IModalItem } from '../../../interface/IModalItem';
import styles from './InfoModal.module.scss';
import InfoModalItem from './InfoModalItem';

const infoObj: IModalItem[] = [
    { title: '이름', text: '김지훈' },
    { title: '생년월일', text: '1995년 02월 25일' },
    { title: '거주지', text: '경기도 광명시 거주' },
    { title: '이메일', text: 'kigpand@naver.com' }
];

const InfoModal = () => {
    return (
        <div className={styles.infoModal}>
            <div className={styles.titleContainer}>
                <div className={styles.modalTitle}>&lt;Info &gt;</div>
            </div>
            <div className={styles.myInfo}>
                <div className={styles.img}></div>
                <div className={styles.info}>
                    { infoObj.map((info: IModalItem) => {
                        return <InfoModalItem title={info.title} text={info.text} key={info.title} />
                    })}
                </div>
            </div>
            <div className={styles.horiLine}></div>
            <div className={styles.careerContainer}>
                <div className={styles.careerTitle}>&lt;Career &gt;</div>
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