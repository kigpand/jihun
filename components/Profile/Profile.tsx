/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import styles from "./Profile.module.scss";
import React, { MouseEvent } from "react";
import InfoModal from "../ProfileModal/info/InfoModal";
import ContactModal from "../ProfileModal/contact/ContactModal";
import PortFolioModal from "../ProfileModal/portfolio/PortFolioModal";

const Profile = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  function addBubbleEvent(e: MouseEvent<HTMLDivElement>) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = e.clientX + "px";
    bubble.style.top = e.clientY + "px";
    profileRef.current?.appendChild(bubble);
    bubble.addEventListener("animationend", (e: any) => {
      e.target.parentNode.removeChild(e.target);
    });
  }

  return (
    <div ref={profileRef} className={styles.profile} onClick={addBubbleEvent}>
      <img src="/imgs/info.png" alt="info" className={styles.info} />
      <img
        src="/imgs/portfolio.png"
        alt="portfolio"
        className={styles.portfolio}
      />
      <img src="/imgs/contact.png" alt="contact" className={styles.contact} />
      <img src="/imgs/memotecon.png" alt="미모티콘" className={styles.icon} />
      <div className={styles.text}>
        포기를 모르는 프론트엔드 개발자
        <br /> 김지훈입니다!
      </div>
      {/* <InfoModal /> */}
      {/* {<PortFolioModal />} */}
      {/* <ContactModal /> */}
    </div>
  );
};

export default Profile;
