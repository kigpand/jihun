import { useEffect, useRef, useState } from 'react';
import styles from './Profile.module.scss';
import React, { MouseEvent } from 'react';
import ProfileItem from './ProfileItem';
import ProfileModal from '../ProfileModal/ProfileModal';

const Profile = () => {

    const profileRef = useRef<HTMLDivElement>(null);
    const mouseItemRef = useRef<HTMLSpanElement>(null);
    const [animEnd, setAnimEnd] = useState<Boolean>(false);

    function addMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (mouseItemRef.current) {
            mouseItemRef.current.style.left = e.clientX + 'px';
            mouseItemRef.current.style.top = e.clientY + 'px';
        }
    }

    return(
        <div ref={profileRef} className={styles.profile} onMouseMove={addMouseMove}>
            <div className={styles.title} onAnimationEnd={() => setAnimEnd(true)}>Front-End Developer Jihun. Kim</div>
            { animEnd && <ProfileItem />}
            <span className={styles.mouseItem} ref={mouseItemRef}></span>
            {/* <ProfileModal /> */}
        </div>
    )
}

export default Profile;