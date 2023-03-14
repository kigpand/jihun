/* eslint-disable @next/next/no-img-element */
import styles from "./PortFolioModalSlide.module.scss";
import { useEffect, useRef } from "react";
import usePortFolio from "../../store/portFolio";
import SlideItem from "../SlideItem/SlideItem";

const PortFolioModalSlide = () => {
  const pFRef = useRef<HTMLDivElement>(null);
  const { portFolio } = usePortFolio();
  const pFList: string[] = ["poke", "Jistargram", "shopping", "cloneTube"];

  useEffect(() => {
    const countObj: any = {
      포켓몬도감: 0,
      Jistargram: 1,
      shopping: 2,
      cloneTube: 3,
    };

    if (pFRef.current) {
      const count = countObj[portFolio];
      pFRef.current.style.transform = `translateX(${-350 * count}px)`;
    }
  }, [portFolio]);

  return (
    <div className={styles.portFolioSlide}>
      <div className={styles.slider}>
        <div className={styles.container} ref={pFRef}>
          {pFList.map((list: string, i: number) => {
            return <SlideItem key={i} list={list} id={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PortFolioModalSlide;
