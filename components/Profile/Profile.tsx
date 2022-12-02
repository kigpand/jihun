import { useRef, useState } from 'react';
import styles from './Profile.module.scss';
import React, { MouseEvent } from 'react';
import ProfileItem from './ProfileItem';
import ProfileModal from '../ProfileModal/ProfileModal';
import useUserStore from '../../store/store';

const Profile = () => {

    const profileRef = useRef<HTMLDivElement>(null);
    const { modal, onOpenModal } = useUserStore();

    function addBubbleEvent(e: MouseEvent<HTMLDivElement>) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = e.clientX + 'px';
        bubble.style.top = e.clientY + 'px';
        profileRef.current?.appendChild(bubble);
        bubble.addEventListener('animationend', (e: any) => {
            e.target.parentNode.removeChild(e.target);
        });
    }

    return(
        <div ref={profileRef} className={styles.profile} onClick={addBubbleEvent}>
            <div className={styles.menu}>
                <div className={styles.menuItem} onClick={() => onOpenModal('info')}>Info</div>
                <div className={styles.menuItem} onClick={() => onOpenModal('portFolio')}>Profile</div>
                <div className={styles.menuItem} onClick={() => onOpenModal('more')}>Contact</div>
            </div>
            <div className={styles.wave}></div>
            <div className={styles.text}>
                <div className={styles.title}>Front-end Developer</div>
                아직은 많이 부족하지만, 한걸음씩 차근차근 발전해나가고 있습니다.
            </div>
            { modal && <ProfileModal /> }
        </div>
    )
}

export default Profile;