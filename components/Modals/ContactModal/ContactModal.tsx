import styles from './ContactModal.module.scss';
import GITHUB from '../../../imgs/github.png';
import MAIL from '../../../imgs/mail.png';
import KAKAO from '../../../imgs/kakao.png';
import Image from 'next/image';

const ContactModal = () => {
    return (
        <div className = {styles.contactModal}>
            <div className={styles.modalTitle}>&lt;More... /&gt;</div>
            <div className={styles.header}>
                <div className={styles.title}><b>I will prepare and some day my chance will come.</b><br />나는 준비할 것이다. 그러면 언젠가 나에게도 기회가 올 것이다.</div>
                <div className={styles.subTitle}>- Abraham Lincoln -</div>
            </div>
            <div className={styles.linkTitle}>&lt;Link &gt;</div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <Image src={GITHUB} alt='github' width={30} height={30}></Image>
                    <span className={styles.texts}><a href='https://github.com/kigpand' target={'_blank'} rel="noreferrer">https://github.com/kigpand</a></span>
                </div>
            </div>
            <div className={styles.contactTitle}>&lt;Contact &gt;</div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <Image src={MAIL} alt='mail' width={30} height={30}></Image>
                    <span className={styles.texts}>kigpand@gmail.com</span>
                </div>
                <div className={styles.item}>
                    <Image src={KAKAO} alt='kakao' width={30} height={30}></Image>
                    <span className={styles.texts}><a href='https://open.kakao.com/o/sB6RgCpe' target={'_blank'} rel="noreferrer">KaKao Talk</a></span>
                </div>
            </div>
        </div>
    )
}

export default ContactModal;