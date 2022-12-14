import type { NextPage } from 'next'
import Head from 'next/head';
import Profile from '../components/Profile/Profile';
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>프론트엔드 개발자 | 김지훈</title>
        <meta name="description" content="Jihun's proFile Site"></meta>
        <meta name="author" content="jihun"></meta>
        <meta name="keyword" content="frontend, react, 프론트엔드, 개발자, 포트폴리오, Javascript"></meta>
      </Head>
      <Profile />
    </div>
  )
}

export default Home;
