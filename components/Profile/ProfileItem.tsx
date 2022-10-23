import styles from './ProfileItem.module.scss';

const ProfileItem = () => {
    const profileItems: string[] = ['who am I?', 'projects', 'contact']

    return (
        <div className={styles.profileItems}>
            { profileItems.map((item: string) => {
                return <div className={styles.item} key={item} >item</div>
            })}
        </div>
    )
}

export default ProfileItem;