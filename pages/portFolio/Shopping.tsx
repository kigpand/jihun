import Head from 'next/head';
import PortFolioImage from '../../components/PortFolioImage/PortFolioImage';
import styles from '../../styles/PortFolio.module.scss';

const Shopping = () => {

    return (
        <div className={styles.portFolio}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Developer Jihun.kim</title>
                <meta name="description" content="Jihun's proFile Site"></meta>
                <meta name="author" content="jihun"></meta>
            </Head>
            <div className={styles.header}>
                <div className={styles.title}>중고거래 Site</div>
                <div className={styles.miniTitle}>
                    FireBase를 사용해 처음 DB통신을 구현한 중고거래 모방 Shopping Site
                </div>
            </div>
            <PortFolioImage title='shopping' src='/imgs/shopping/shopping.png' />
            <div className={styles.texts}>
                <div className={styles.textTitle}>About project</div>
                <div className={styles.line}></div>
                <p className={styles.textContent}>
                    Google Firebase의 RealTime DB를 공부해 처음으로 DB통신이란걸 해본 프로젝트입니다.<br />
                    Login 또한 Google Auth를 사용해 Google Login을 구현했습니다.<br />
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
                    <li>Google Firebase</li>
                </ul>
            </div>
            <div className={styles.texts}>
                <div className={styles.textTitle}>Link</div>
                <div className={styles.line}></div>
                <div className={styles.linkItem}>GitHub: <a href='https://github.com/kigpand/shopping' target='_blank' rel="noreferrer">https://github.com/kigpand/shopping</a></div>
                <div className={styles.linkItem}>Page: <a href='https://kigpand.github.io/shopping/' target='_blank' rel="noreferrer">https://kigpand.github.io/shopping/</a></div>
            </div>
        </div>
    )
}

export default Shopping;