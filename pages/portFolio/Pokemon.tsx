import Head from 'next/head';
import HomeBtn from '../../components/HomeBtn/HomeBtn';
import PortFolioImage from '../../components/PortFolioImage/PortFolioImage';
import styles from '../../styles/PortFolio.module.scss';

const Pokemon = () => {

    return (
        <div className={styles.portFolio}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Developer Jihun.kim</title>
                <meta name="description" content="Jihun's proFile Site"></meta>
                <meta name="author" content="jihun"></meta>
            </Head>
            <div className={styles.header}>
                <HomeBtn />
                <div className={styles.title}>포켓몬 도감</div>
                <div className={styles.miniTitle}>
                    poke API의 데이터를 활용한 포켓몬 도감 Web APP
                </div>
            </div>
            <PortFolioImage title='poke' src='/imgs/pokemon/poke.png' />
            <div className={styles.texts}>
                <div className={styles.textTitle}>About project</div>
                <div className={styles.line}></div>
                <p className={styles.textContent}>
                    API를 활용해서 간단한 Web APP을 만들려는 계획중 평상시 좋아하던 포켓몬스터 관련 API를 찾게되어 개발을 하게 됬습니다.<br />
                    처음 데이터를 관리할 때는 DB에 저장하여 사용했지만 현재는 API 데이터를 가공하여 JSON 형식으로 저장해서 호출하고 있습니다.<br />
                    간단한 Web APP이지만 SCSS를 처음으로 사용해본 프로젝트였고 css grid관련 기능도 시도해봤습니다.
                    현재 지속적으로 수정사항 체크 중이며 앞으로도 계속 추가 개발해 나갈 예정입니다.
                </p>
            </div>
            <div className={styles.texts}>
                <div className={styles.textTitle}>Tech</div>
                <div className={styles.line}></div>
                <ul className={styles.textUl}>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>poke API - <a href='https://pokeapi.co' target='_blank' rel="noreferrer">https://pokeapi.co/</a></li>
                </ul>
            </div>
            <div className={styles.texts}>
                <div className={styles.textTitle}>Link</div>
                <div className={styles.line}></div>
                <div className={styles.linkItem}>GitHub: <a href='https://github.com/kigpand/pokemon' target='_blank' rel="noreferrer">https://github.com/kigpand/pokemon</a></div>
                <div className={styles.linkItem}>Page: <a href='https://kigpand.github.io/pokemon/' target='_blank' rel="noreferrer">https://kigpand.github.io/pokemon/</a></div>
            </div>
        </div>
    )
}

export default Pokemon;