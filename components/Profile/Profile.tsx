/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import styles from "./Profile.module.scss";
import React from "react";
import InfoModal from "../ProfileModal/info/InfoModal";
import ContactModal from "../ProfileModal/contact/ContactModal";
import PortFolioModal from "../ProfileModal/portfolio/PortFolioModal";

const Profile = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const [info, setInfo] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);

  return (
    <div ref={profileRef} className={styles.profile}>
      <img
        src="/imgs/info.png"
        alt="info"
        className={styles.info}
        onClick={() => setInfo(true)}
      />
      <img
        src="/imgs/portfolio.png"
        alt="portfolio"
        className={styles.portfolio}
        onClick={() => setPortfolio(true)}
      />
      <img
        src="/imgs/contact.png"
        alt="contact"
        className={styles.contact}
        onClick={() => setContact(true)}
      />
      <img src="/imgs/memotecon.png" alt="미모티콘" className={styles.icon} />
      <div className={styles.text}>
        포기를 모르는 프론트엔드 개발자
        <br /> 김지훈입니다!
      </div>
      {info && (
        <InfoModal
          unInfo={() => {
            setInfo(false);
          }}
        />
      )}
      {portfolio && <PortFolioModal unProfile={() => setPortfolio(false)} />}
      {contact && <ContactModal unContact={() => setContact(false)} />}
    </div>
  );
};

export default Profile;
