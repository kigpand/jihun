import styles from './ProfileItem.module.scss';

const ProfileItem = ({ onSetModal }: any) => {
    const profileItems: string[] = ['who am I?', 'projects', 'contact'];

    function onItemClick() {
        onSetModal(true);
    }

    return (
        <div className={styles.profileItems}>
            { profileItems.map((item: string) => {
                return <div className={styles.item} key={item} onClick={onItemClick}>item</div>
            })}
        </div>
    )
}

export default ProfileItem;