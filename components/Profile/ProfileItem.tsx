import { useRef, useState } from 'react';
import useUserStore from '../../store/store';
import styles from './ProfileItem.module.scss';

interface IProFileItem {
    text: string;
    key: string;
}

const ProfileItem = () => {
    const [start, setStart] = useState<Boolean>(false);
    const [pos, setPos] = useState<string>('20%');
    const [currentItem, setCurrentItem] = useState<string>('');
    const profileItems: IProFileItem[] = [
        { text: 'who am I?', key: 'info' }, 
        { text: 'projects', key: 'portFolio'},
        { text: 'more...', key: 'more'}
    ];
    const { onOpenModal } = useUserStore();

    function onItemClick(e: any, item: string) {
        switch(e.target.innerHTML) {
            case 'who am I?':
                setPos('20%');
                break;
            case 'projects':
                setPos('40%');
                break;
            case 'more...':
                setPos('70%');
                break;
        }
        
        if (window.innerWidth < 767) {
            onOpenModal(item);
        } else {
            setCurrentItem(item);
            setStart(true);
        }
    }

    function onItemAnimFinish() {
        onOpenModal(currentItem);
        setStart(false);
        setCurrentItem('');
    }

    return (
        <div className={styles.profileItems}>
            { profileItems.map((item: IProFileItem) => {
                return <div className={styles.item} key={item.key} onClick={(e: any) => onItemClick(e, item.key)}>{item.text}</div>
            })}
            { start && <div className={styles.animItem} style={{ left: pos }} onAnimationEnd={onItemAnimFinish}></div>}
        </div>
    )
}

export default ProfileItem;