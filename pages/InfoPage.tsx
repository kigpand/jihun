import Head from 'next/head';
import InfoCompany from '../components/Info/InfoCompany';
import InfoHeader from '../components/Info/InfoHeader';
import styles from '../styles/Home.module.scss';

const InfoPage = () => {
    return (
        <div className={styles.infoPage}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Developer Jihun.kim</title>
                <meta name="description" content="Jihun's proFile Site"></meta>
                <meta name="author" content="jihun"></meta>
            </Head>
            <InfoHeader />
            <InfoCompany />
        </div>
    )
}

export default InfoPage;