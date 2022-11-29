import { useRef } from 'react';
import usePortFolio from '../../store/portFolio';
import styles from './PortFolioBtns.module.scss';

const PortFolioBtns = () => {
    const { changePortCount } = usePortFolio();

    function onBtnClick(e: any) {
        e.target.style.backgroundColor = 'gray';
        changePortCount(Number(e.target.id));
    }

    return (
        <div className={styles.portFolioBtns}>
            <div className={styles.btns}>
                <div id='0' onClick={onBtnClick}></div>
                <div id='1' onClick={onBtnClick}></div>
                <div id='2' onClick={onBtnClick}></div>
            </div>
        </div>
    )
}

export default PortFolioBtns;