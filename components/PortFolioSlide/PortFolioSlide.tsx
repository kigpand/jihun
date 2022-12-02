import styles from './PortFolioSlide.module.scss';
import { useEffect, useRef } from 'react';
import usePortFolio from '../../store/portFolio';

const PortFolioSlide = () => {
    const pFRef = useRef<HTMLDivElement>(null);
    const { portFolio } = usePortFolio();

    useEffect(() => {
        if (pFRef.current) {
            const count = portFolio === '포켓몬도감' ? 0 : portFolio === 'Jistargram' ? 1 : 2;
            const width = document.querySelector('.item');
            pFRef.current.style.transform = `translateX(${-width!.getBoundingClientRect().width * count}px)`;
        }
    }, [portFolio]);

    return (
        <div className={styles.portFolioSlide}>
            <div className={styles.slider}>
                <div className={styles.container} ref={pFRef}>
                    <div className='item' style={{ backgroundColor: 'yellow'}}>1</div>
                    <div style={{ backgroundColor: 'blue'}}>2</div>
                    <div style={{ backgroundColor: 'green'}}>3</div>
                </div>
            </div>
        </div>
    )
}

export default PortFolioSlide;