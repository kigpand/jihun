import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './PortFolioImage.module.scss';

interface PortFolioImage {
    title: string;
    src: string;
}

const srcObj:any = {
    'poke1': '/imgs/pokemon/poke.png',
    'poke2': '/imgs/pokemon/poke2.png',
    'poke3': '/imgs/pokemon/poke3.png',
    'jigram1': '/imgs/jigram/jigram.png',
    'jigram2': '/imgs/jigram/jigram2.png',
    'jigram3': '/imgs/jigram/jigram3.png',
    'shopping1': '/imgs/shopping/shopping.png',
    'shopping2': '/imgs/shopping/shopping2.png',
    'shopping3': '/imgs/shopping/shopping3.png',
    'youtube1': '/imgs/youtube/youtube.png',
    'youtube2': '/imgs/youtube/youtube2.png',
    'youtube3': '/imgs/youtube/youtube3.png',
}

const PortFolioImage = ({ title, src }: PortFolioImage) => {

    const imgRef = useRef<HTMLImageElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    function onBtnClick(num: number) {
        if (imgRef.current) {
            if (num === 1) {
                if (title === 'jigram') imgRef.current.src = srcObj['jigram1'];
                if (title === 'poke') imgRef.current.src = srcObj['poke1'];
                if (title === 'shopping') imgRef.current.src = srcObj['shopping1'];
                if (title === 'youtube') imgRef.current.src = srcObj['youtube1'];

                btnRef.current?.childNodes.forEach((child: any, i: number) => {
                    if (i === 0) {
                        child.style.backgroundColor = 'white';
                        child.style.transform = 'scale(1.3)';
                    } else {
                        child.style.backgroundColor = 'lightgray';
                        child.style.transform = 'scale(1)';
                    }
                });
            }
            if (num === 2) {
                if (title === 'jigram') imgRef.current.src = srcObj['jigram2'];
                if (title === 'poke') imgRef.current.src = srcObj['poke2'];
                if (title === 'shopping') imgRef.current.src = srcObj['shopping2'];
                if (title === 'youtube') imgRef.current.src = srcObj['youtube2'];

                btnRef.current?.childNodes.forEach((child: any, i: number) => {
                    if (i === 1) {
                        child.style.backgroundColor = 'white';
                        child.style.transform = 'scale(1.3)';
                    } else {
                        child.style.backgroundColor = 'lightgray';
                        child.style.transform = 'scale(1)';
                    }
                });
            }
            if (num === 3) {
                if (title === 'jigram') imgRef.current.src = srcObj['jigram3'];
                if (title === 'poke') imgRef.current.src = srcObj['poke3'];
                if (title === 'shopping') imgRef.current.src = srcObj['shopping3'];
                if (title === 'youtube') imgRef.current.src = srcObj['youtube3'];

                btnRef.current?.childNodes.forEach((child: any, i: number) => {
                    if (i === 2) {
                        child.style.backgroundColor = 'white';
                        child.style.transform = 'scale(1.3)';
                    } else {
                        child.style.backgroundColor = 'lightgray';
                        child.style.transform = 'scale(1)';
                    }
                });
            }
        }
    }

    return (
        <div className={styles.portFolioImage}>
            <div className={styles.imgContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} className={styles.img} ref={imgRef} alt='image'></img>
            </div>
            <div className={styles.btns} ref={btnRef}>
                <div style={{ backgroundColor: 'white', transform: 'scale(1.3)'}} onClick={() => onBtnClick(1)}></div>
                <div onClick={() => onBtnClick(2)}></div>
                <div onClick={() => onBtnClick(3)}></div>
            </div>
        </div>
    )
}

export default PortFolioImage;