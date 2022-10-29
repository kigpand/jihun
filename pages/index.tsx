import type { NextPage } from 'next'
import Profile from '../components/Profile/Profile';
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  )
}

export default Home;
