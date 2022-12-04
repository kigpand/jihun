import { MouseEvent, useEffect, useRef } from 'react';
import usePortFolio from '../../../store/portFolio';
import styles from './PortFolioModalBtn.module.scss';

const PortFolioModalBtn = () => {
    const btnsRef = useRef<HTMLDivElement>(null);
    const { portFolio, changePortFolio } = usePortFolio();

    function onBtnClick(e: MouseEvent<HTMLDivElement>) {
        btnsRef.current?.childNodes.forEach((child: any) => {
            child.style.backgroundColor = 'white';
            child.style.color = 'black';
        });
        e.currentTarget.style.backgroundColor = 'gray';
        e.currentTarget.style.color = 'white';
        changePortFolio(e.currentTarget.innerText);
    }

    useEffect(() => {
        if (btnsRef.current) {
            const index = portFolio === '포켓몬도감' ? 0 : portFolio === 'Jistargram' ? 1 : portFolio === 'shopping' ? 2 : 3;
            btnsRef.current?.childNodes.forEach((child: any, i: number) => {
                if (i === index) {
                    child.style.backgroundColor = 'gray';
                    child.style.color = 'white';
                } else {
                    child.style.backgroundColor = 'white';
                    child.style.color = 'black';
                }
            });
        }
    }, [portFolio]);

    return (
        <div className={styles.portFolioModalBtn} ref={btnsRef}>
            <div className={styles.item} style={{ backgroundColor: 'gray', color: 'white' }} onClick={onBtnClick}>포켓몬도감</div>
            <div className={styles.item} onClick={onBtnClick}>Jistargram</div>
            <div className={styles.item} onClick={onBtnClick}>shopping</div>
            <div className={styles.item} onClick={onBtnClick}>cloneTube</div>
        </div>
    )
}

export default PortFolioModalBtn;