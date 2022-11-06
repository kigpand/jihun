import { MouseEvent, useRef } from 'react';
import usePortFolio from '../../../store/portFolio';
import styles from './PortFolioModalBtn.module.scss';

const PortFolioModalBtn = () => {
    const btnsRef = useRef<HTMLDivElement>(null);
    const { changePortFolio } = usePortFolio();

    function onBtnClick(e: MouseEvent<HTMLDivElement>) {
        btnsRef.current?.childNodes.forEach((child: any) => {
            child.style.backgroundColor = 'white';
        });
        e.currentTarget.style.backgroundColor = 'lightgray';
        changePortFolio(e.currentTarget.innerText);
    }

    return (
        <div className={styles.portFolioModalBtn} ref={btnsRef}>
            <div className={styles.item} style={{ backgroundColor: 'lightgray' }} onClick={onBtnClick}>포켓몬도감</div>
            <div className={styles.item} onClick={onBtnClick}>Jistargram</div>
            <div className={styles.item} onClick={onBtnClick}>ToDo-List</div>
        </div>
    )
}

export default PortFolioModalBtn;