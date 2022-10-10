import { useEffect, useRef } from 'react';
import styles from './Profile.module.scss';
import React, { MouseEvent } from 'react';

const Profile = () => {

    const profileRef = useRef<HTMLDivElement>(null);

    function addMouseMove(e: MouseEvent<HTMLDivElement>) {
    }

    function addColorEvent() {
        const left = Math.floor(Math.random() * document.body.getBoundingClientRect().width);
        const top = Math.floor(Math.random() * document.body.getBoundingClientRect().height);

        const circle = document.createElement('span');
        circle.style.backgroundColor = 'red';
        circle.style.left = left + 'px';
        circle.style.top = top + 'px';
        circle.style.width = '100px';
        circle.style.height = '100px';
        profileRef.current?.appendChild(circle);
    }

    useEffect(() => {
        addColorEvent();
    }, []);

    return(
        <div ref={profileRef} className={styles.profile} onMouseMove={addMouseMove}>
            <div className={styles.title}>Front-End Developer Jihun. Kim</div>
        </div>
    )
}

export default Profile;