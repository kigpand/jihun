import styles from './PortFolioSlide.module.scss';

const PortFolioSlide = () => {
    return (
        <div className={styles.portFolioSlide}>
            <div className={styles.container}>
                <div style={{ backgroundColor: 'red'}}></div>
                <div style={{ backgroundColor: 'yellow'}}></div>
                <div style={{ backgroundColor: 'green'}}></div>
                <div style={{ backgroundColor: 'blue'}}></div>
                <div style={{ backgroundColor: 'gray'}}></div>
                <div style={{ backgroundColor: 'purple'}}></div>
                <div style={{ backgroundColor: 'orange'}}></div>
            </div>
        </div>
    )
}

export default PortFolioSlide;