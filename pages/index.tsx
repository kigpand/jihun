import type { NextPage } from 'next'
import Head from 'next/head';
import Profile from '../components/Profile/Profile';
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Developer Jihun.kim</title>
      </Head>
      <Profile />
    </div>
  )
}

export default Home;
