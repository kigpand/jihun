import { useRef, useState } from 'react';
import styles from './Profile.module.scss';
import React, { MouseEvent } from 'react';
import ProfileItem from './ProfileItem';
import ProfileModal from '../ProfileModal/ProfileModal';
import useUserStore from '../../store/store';

const Profile = () => {

    const profileRef = useRef<HTMLDivElement>(null);
    const [animEnd, setAnimEnd] = useState<Boolean>(false);
    const { modal } = useUserStore();

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
            <div className={styles.container}>
                <div>꼼꼼하고</div>
                <div>책임감 있고</div>
                <div>재밌는</div>
                <div>개발자가 꿈이에요...</div>
            </div>
            <div className={styles.items}>
            </div>
            {/* { animEnd && <ProfileItem />} */}
            { modal && <ProfileModal /> }
        </div>
    )
}

export default Profile;