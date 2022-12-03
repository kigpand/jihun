import Image from 'next/image';
import styles from './SlideItem.module.scss';
import POKEIMG from '../../imgs/poke.png';
import JIGRAMIMG from '../../imgs/jigram.png';
import SHOPPINGIMG from '../../imgs/shopping.png';
import CLONETUBEIMG from '../../imgs/youtube.png';
import { slideItemObj } from './slideItemObj';
import { useEffect, useState } from 'react';
import { ISlideItemObj } from '../../interface/ISlideItemObj';
import { useRouter } from 'next/router';

interface ISlideItem {
    list: string;
    id: number
}

const SlideItem = ({list, id}: ISlideItem) => {

    const [item, setItem] = useState<ISlideItemObj>();
    const router = useRouter();

    useEffect(() => {
        if (slideItemObj) {
            console.log(id);
            const result = slideItemObj.find((item: ISlideItemObj) => item.id === id);
            if (result) setItem(result);
        }
    }, [id]);

    function onMoreBtn() {
        let link:string = '';
        if (item) {
            if (item.id === 0) link = '/portFolio/Pokemon';
            if (item.id === 1) link = '/portFolio/Jistargram';
            if (item.id === 2) link = '/portFolio/Shopping';
            if (item.id === 3) link = '/portFolio/CloneTube';

            router.push(link);
        }
    }

    return (
        <div className={styles.slideItem}>
            { item && 
                <div className={styles.over}>
                    <div className={styles.overTitle}>{item.title}</div>
                    <div className={styles.toolContainer}>
                        { item.tools.map((tool: string, i: number) => {
                            return <div key={i}>{tool}</div>
                        })}
                    </div>
                    <div className={styles.moreBtn}><div onClick={onMoreBtn}>more...</div></div>
                </div>
            }
            {list === 'poke' && <Image src={POKEIMG}className='item' width={350} height={400} alt='poke' />}
            {list === 'Jistargram' && <Image src={JIGRAMIMG}className='item' width={350} height={400} alt='jigram' />}
            {list === 'shopping' && <Image src={SHOPPINGIMG}className='item' width={350} height={400} alt='shopping' />}
            {list === 'cloneTube' && <Image src={CLONETUBEIMG}className='item' width={350} height={400} alt='cloneTube' />}
        </div>
    )
}

export default SlideItem;