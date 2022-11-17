import styles from './PortFolioSlide.module.scss';
import { useEffect, useRef, useState } from 'react';

const PortFolioSlide = () => {
    const pFRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState<number>(0);

    function onLeftClick() {
        if (pFRef.current) {
            const width = document.querySelector('.item');
            pFRef.current.style.transform = `translateX(${count + width!.getBoundingClientRect().width}px)`;
            setCount(count + width!.getBoundingClientRect().width);
        }
    }

    function onRightClick() {
        if (pFRef.current) {
            const width = document.querySelector('.item');
            pFRef.current.style.transform = `translateX(${count - width!.getBoundingClientRect().width}px)`;
            setCount(count - width!.getBoundingClientRect().width);
        }
    }

    useEffect(() => {
        const pfLeft = document.querySelector('#pfLeft') as HTMLElement;
        const pfRight = document.querySelector('#pfRight') as HTMLElement;
        const width = document.querySelector('.item');

        if (pfLeft) {
            if (count === 0) {
                pfLeft.style.visibility = 'hidden';
            } else {
                pfLeft.style.visibility = 'visible'
            }
        }

        if (pfRight && width) {
            if (count === width.getBoundingClientRect().width * -2) {
                pfRight.style.visibility = 'hidden';
            } else {
                pfRight.style.visibility = 'visible';
            }
        }
    }, [count]);

    return (
        <div className={styles.portFolioSlide}>
            <div onClick={onLeftClick} id='pfLeft'>left</div>
            <div className={styles.slider}>
                <div className={styles.container} ref={pFRef}>
                    <div className='item' style={{ backgroundColor: 'yellow'}}>1</div>
                    <div style={{ backgroundColor: 'blue'}}>2</div>
                    <div style={{ backgroundColor: 'green'}}>3</div>
                </div>
            </div>
            <div onClick={onRightClick} id='pfRight'>right</div>
        </div>
    )
}

export default PortFolioSlide;