import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <span>Profile</span>
            <span>Project</span>
            <span>Contact</span>
        </div>
    )
}

export default Menu;