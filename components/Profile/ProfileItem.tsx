import useUserStore from '../../store/store';
import styles from './ProfileItem.module.scss';

interface IProFileItem {
    text: string;
    key: string;
}

const ProfileItem = () => {
    const profileItems: IProFileItem[] = [
        { text: 'who am I?', key: 'info' }, 
        { text: 'projects', key: 'portFolio'},
        { text: 'more...', key: 'more'}
    ];
    const { onOpenModal } = useUserStore();

    function onItemClick(item: string) {
        onOpenModal(item);
    }

    return (
        <div className={styles.profileItems}>
            { profileItems.map((item: IProFileItem) => {
                return <div className={styles.item} key={item.key} onClick={() => onItemClick(item.key)}>{item.text}</div>
            })}
        </div>
    )
}

export default ProfileItem;