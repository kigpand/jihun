import Image from 'next/image';
import { useRouter } from 'next/router';
import { infoObj } from '../../common/infoObj';
import { IInfoItem } from '../../interface/IInfoItem';
import useUserStore from '../../store/store';
import styles from './InfoHeader.module.scss';
import InfoHeaderItem from './InfoHeaderItem';
import ME from '../../imgs/me.jpg';

const InfoHeader = () => {
    const router = useRouter();
    const { onCloseModal } = useUserStore();

    function onBackBtn() {
        router.push('/');
        onCloseModal();
    }

    return (
        <div className={styles.infoHeader}>
            <div className={styles.backBtn} onClick={onBackBtn}>&lt; back</div>
            <div className={styles.title}>
                <div className={styles.titleItem}>&lt;Info /&gt;</div>
            </div>
            <div className={styles.main}>
                <Image src={ME} alt='github' width={200} height={200} style={{ borderRadius: '50%'}}></Image>
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