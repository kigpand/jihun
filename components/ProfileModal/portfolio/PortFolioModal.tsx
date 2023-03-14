/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import PModalItem from "./item/PModalItem";
import styles from "./PortFolioModal.module.scss";

const PortfolioArr = [
  {
    title: "Pokemon 도감",
    content: "poke api를 활용한 웹앱 포켓몬 도감",
    url: "/portFolio/Pokemon",
  },
  {
    title: "Jistargram",
    content: "NextJS 기반 인스타그램 클론 사이트",
    url: "portFolio/Jistargram",
  },
  {
    title: "중고거래",
    content: "개인 공부용 개발 중고거래 사이트",
    url: "portFolio/Shopping",
  },
];

const PortFolioModal = ({ unProfile }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const onHomeBtn = () => {
    if (ref && ref.current) {
      ref.current.style.animation = "portFolioModalCloseAnim 1s forwards";
      ref.current.addEventListener("animationend", () => {
        unProfile();
      });
    }
  };

  return (
    <div className={styles.portFolioModal} ref={ref}>
      <div className={styles.homeBtn}>
        <img
          src="/imgs/home.png"
          alt="home"
          className={styles.img}
          onClick={onHomeBtn}
        />
      </div>
      {PortfolioArr.map((item: any, i: number) => {
        return <PModalItem item={item} key={i} />;
      })}
    </div>
  );
};

export default PortFolioModal;
