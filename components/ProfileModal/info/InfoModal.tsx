/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import InfoCompany from "../../Info/InfoCompany";
import InfoHeader from "../../Info/InfoHeader";
import styles from "./InfoModal.module.scss";

const InfoModal = ({ unInfo }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const onHomeBtn = () => {
    if (ref && ref.current) {
      ref.current.style.animation = "infoModalCloseAnim 1s forwards";
      ref.current.addEventListener("animationend", () => {
        unInfo();
      });
    }
  };

  return (
    <div className={styles.infoModal} ref={ref}>
      <div className={styles.homeBtn}>
        <img
          src="/imgs/home.png"
          alt="home"
          className={styles.img}
          onClick={onHomeBtn}
        />
      </div>
      <InfoHeader />
      <InfoCompany />
    </div>
  );
};

export default InfoModal;
