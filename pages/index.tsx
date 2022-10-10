import type { NextPage } from 'next'
import Menu from '../components/Menu/Menu';
import Profile from '../components/Profile/Profile';
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Profile />
    </div>
  )
}

export default Home;
