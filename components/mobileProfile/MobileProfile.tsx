import { useRef, useState } from "react";
import styles from "./MobileProfile.module.scss";
import React, { MouseEvent } from "react";
import useUserStore from "../../store/store";
import InfoModal from "../ProfileModal/info/InfoModal";
import PortFolioModal from "../ProfileModal/portfolio/PortFolioModal";
import ContactModal from "../ProfileModal/contact/ContactModal";

const MobileProfile = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const sideTitleRef = useRef<HTMLDivElement>(null);
  const [info, setInfo] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);

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

  function onAnimEnd() {
    if (menuRef.current && sideTitleRef.current) {
      menuRef.current.style.opacity = "1";
      sideTitleRef.current.style.opacity = "1";
    }
  }

  return (
    <div ref={profileRef} className={styles.profile} onClick={addBubbleEvent}>
      <div className={styles.menu} ref={menuRef}>
        <div className={styles.menuItem} onClick={() => setInfo(true)}>
          Info
        </div>
        <div className={styles.menuItem} onClick={() => setPortfolio(true)}>
          PortFolio
        </div>
        <div className={styles.menuItem} onClick={() => setContact(true)}>
          Contact
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.title} onAnimationEnd={onAnimEnd}>
          Front-end Developer Jihun.Kim
        </div>
        <div className={styles.sideTitle} ref={sideTitleRef}>
          아직은 많이 부족하지만, 한걸음씩 차근차근 발전해나가고 있습니다.
        </div>
      </div>
      {info && (
        <InfoModal
          unInfo={() => {
            setInfo(false);
          }}
        />
      )}
      {portfolio && <PortFolioModal unProfile={() => setPortfolio(false)} />}
      {contact && <ContactModal />}
    </div>
  );
};

export default MobileProfile;
