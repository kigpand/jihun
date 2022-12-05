import { useRouter } from 'next/router';
import useUserStore from '../../store/store';
import styles from './HomeBtn.module.scss';

const HomeBtn = () => {

    const router = useRouter();
    const { onCloseModal } = useUserStore();

    function onReturnHome() {
        onCloseModal();
        router.push('/');
    }

    return (
        <div className={styles.homeBtn}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/imgs/home.png' alt='homeBtn' className={styles.img} onClick={onReturnHome}></img>
        </div>
    )
}

export default HomeBtn;