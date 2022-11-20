import styles from './PortFolioSlide.module.scss';
import { useEffect, useRef, useState } from 'react';
import usePortFolio from '../../store/portFolio';

const PortFolioSlide = () => {
    const pFRef = useRef<HTMLDivElement>(null);
    const { portCount } = usePortFolio();

    useEffect(() => {
        if (pFRef.current) {
            const width = document.querySelector('.item');
            pFRef.current.style.transform = `translateX(${-width!.getBoundingClientRect().width * portCount}px)`;
        }
    }, [portCount]);

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