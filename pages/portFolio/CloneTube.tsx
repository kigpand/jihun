import Head from 'next/head';
import PortFolioImage from '../../components/PortFolioImage/PortFolioImage';
import styles from '../../styles/PortFolio.module.scss';

const CloneTube = () => {

    return (
        <div className={styles.portFolio}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Developer Jihun.kim</title>
                <meta name="description" content="Jihun's proFile Site"></meta>
                <meta name="author" content="jihun"></meta>
            </Head>
            <div className={styles.header}>
                <div className={styles.title}>YouTube Clone Coding Site</div>
                <div className={styles.miniTitle}>
                    YouTube API를 활용한 YouTube Clone Coding Site
                </div>
            </div>
            <PortFolioImage title='youtube' src='/imgs/youtube/youtube.png' />
            <div className={styles.texts}>
                <div className={styles.textTitle}>About project</div>
                <div className={styles.line}></div>
                <p className={styles.textContent}>
                    저의 첫 배포 작품이고 처음으로 외부 API를 사용해본 작품입니다.<br />
                    유튜브 제공 API를 알게되어 사용해보고 싶어 구글링을 통해 사용법을 배워 실적용해봤습니다.
                </p>
            </div>
            <div className={styles.texts}>
                <div className={styles.textTitle}>Tech</div>
                <div className={styles.line}></div>
                <ul className={styles.textUl}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>YouTube API</li>
                </ul>
            </div>
            <div className={styles.texts}>
                <div className={styles.textTitle}>Link</div>
                <div className={styles.line}></div>
                <div className={styles.linkItem}>GitHub: <a href='https://github.com/kigpand/youtubeclone' target='_blank' rel="noreferrer">https://github.com/kigpand/youtubeclone</a></div>
                <div className={styles.linkItem}>Page: <a href='https://kigpand.github.io/youtubeclone/' target='_blank' rel="noreferrer">https://kigpand.github.io/youtubeclone/</a></div>
            </div>
        </div>
    )
}

export default CloneTube;