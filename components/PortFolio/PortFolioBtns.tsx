import { useEffect, useRef, MouseEvent } from 'react';
import usePortFolio from '../../store/portFolio';
import styles from './PortFolioBtns.module.scss';

const PortFolioBtns = () => {

    const pFRef = useRef<HTMLDivElement>(null);
    const { portFolio, changePortFolio } = usePortFolio();

    useEffect(() => {
        if (pFRef.current) {
            const array: any = pFRef.current.childNodes;
            if (portFolio === '포켓몬도감') {
                array[0].style.backgroundColor = 'lightgray';
                array[1].style.backgroundColor = 'white';
                array[2].style.backgroundColor = 'white';
            }
            else if (portFolio === 'Jistargram') {
                array[0].style.backgroundColor = 'white';
                array[1].style.backgroundColor = 'lightgray';
                array[2].style.backgroundColor = 'white';
            }
            else {
                array[0].style.backgroundColor = 'white';
                array[1].style.backgroundColor = 'white';
                array[2].style.backgroundColor = 'lightgray';
            }
        }
    }, [portFolio]);

    function onBtnClick(e: MouseEvent<HTMLDivElement>) {
        changePortFolio(e.currentTarget.innerText);
    }

    return (
        <div className={styles.portFolioBtns} ref={pFRef}>
            <div className={styles.btn} onClick={onBtnClick}>포켓몬도감</div>
            <div className={styles.btn} onClick={onBtnClick}>Jistargram</div>
            <div className={styles.btn} onClick={onBtnClick}>ToDo-List</div>
        </div>
    )
}

export default PortFolioBtns;