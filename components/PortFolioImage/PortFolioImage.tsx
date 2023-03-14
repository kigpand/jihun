/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import styles from "./PortFolioImage.module.scss";

interface PortFolioImage {
  title: string;
  src: string;
}

const srcObj: any = {
  poke1: "/imgs/pokemon/poke.png",
  poke2: "/imgs/pokemon/poke2.png",
  poke3: "/imgs/pokemon/poke3.png",
  poke4: "/imgs/pokemon/poke4.png",
  poke5: "/imgs/pokemon/poke5.png",
  mobilePoke1: "/imgs/pokemon/mobilePoke.png",
  mobilePoke2: "/imgs/pokemon/mobilePoke2.png",
  mobilePoke3: "/imgs/pokemon/mobilePoke3.png",
  mobilePoke4: "/imgs/pokemon/mobilePoke4.png",
  mobilePoke5: "/imgs/pokemon/mobilePoke5.png",
  jigram1: "/imgs/jigram/jigram.png",
  jigram2: "/imgs/jigram/jigram2.png",
  jigram3: "/imgs/jigram/jigram3.png",
  jigram4: "/imgs/jigram/jigram4.png",
  jigram5: "/imgs/jigram/jigram5.png",
  jigram6: "/imgs/jigram/jigram6.png",
  mobileJigram1: "/imgs/jigram/mobileJigram.png",
  mobileJigram2: "/imgs/jigram/mobileJigram2.png",
  mobileJigram3: "/imgs/jigram/mobileJigram3.png",
  mobileJigram4: "/imgs/jigram/mobileJigram4.png",
  mobileJigram5: "/imgs/jigram/mobileJigram5.png",
  mobileJigram6: "/imgs/jigram/mobileJigram6.png",
  shopping1: "/imgs/shopping/shopping.png",
  shopping2: "/imgs/shopping/shopping2.png",
  shopping3: "/imgs/shopping/shopping3.png",
  shopping4: "/imgs/shopping/shopping4.png",
  mobileShopping1: "/imgs/shopping/mobileShopping.png",
  mobileShopping2: "/imgs/shopping/mobileShopping2.png",
  mobileShopping3: "/imgs/shopping/mobileShopping3.png",
  mobileShopping4: "/imgs/shopping/mobileShopping4.png",
};

const PortFolioImage = ({ title, src }: PortFolioImage) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const computerRef = useRef<HTMLImageElement>(null);
  const smartRef = useRef<HTMLImageElement>(null);
  const [mobile, setMobile] = useState<boolean>(false);

  const onMobileSet = (text: string) => {
    if (!imgRef.current) return;
    if (text === "컴퓨터") {
      if (computerRef.current && smartRef.current) {
        computerRef.current.style.backgroundColor = "white";
        smartRef.current.style.backgroundColor = "gray";
        setMobile(false);
        if (title === "jigram") {
          imgRef.current.src = srcObj["jigram1"];
        }
        if (title === "poke") {
          imgRef.current.src = srcObj["poke1"];
        }
        if (title === "shopping") {
          imgRef.current.src = srcObj["shopping1"];
        }
        btnRef.current?.childNodes.forEach((child: any, i: number) => {
          if (i === 0) {
            child.style.backgroundColor = "white";
            child.style.transform = "scale(1.3)";
          } else {
            child.style.backgroundColor = "lightgray";
            child.style.transform = "scale(1)";
          }
        });
      }
    }

    if (text === "스마트폰") {
      if (computerRef.current && smartRef.current) {
        computerRef.current.style.backgroundColor = "gray";
        smartRef.current.style.backgroundColor = "white";
        setMobile(true);
        if (title === "jigram") {
          imgRef.current.src = srcObj["mobileJigram1"];
        }
        if (title === "poke") {
          imgRef.current.src = srcObj["mobilePoke1"];
        }
        if (title === "shopping") {
          imgRef.current.src = srcObj["mobileShopping1"];
        }
        btnRef.current?.childNodes.forEach((child: any, i: number) => {
          if (i === 0) {
            child.style.backgroundColor = "white";
            child.style.transform = "scale(1.3)";
          } else {
            child.style.backgroundColor = "lightgray";
            child.style.transform = "scale(1)";
          }
        });
      }
    }
  };

  function onBtnClick(num: number) {
    if (imgRef.current) {
      if (num === 1) {
        if (title === "jigram")
          imgRef.current.src = !mobile
            ? srcObj["jigram1"]
            : srcObj["mobileJigram1"];
        if (title === "poke")
          imgRef.current.src = !mobile
            ? srcObj["poke1"]
            : srcObj["mobilePoke1"];
        if (title === "shopping")
          imgRef.current.src = !mobile
            ? srcObj["shopping1"]
            : srcObj["mobileShopping1"];

        btnRef.current?.childNodes.forEach((child: any, i: number) => {
          if (i === 0) {
            child.style.backgroundColor = "white";
            child.style.transform = "scale(1.3)";
          } else {
            child.style.backgroundColor = "lightgray";
            child.style.transform = "scale(1)";
          }
        });
      }
      if (num === 2) {
        if (title === "jigram")
          imgRef.current.src = !mobile
            ? srcObj["jigram2"]
            : srcObj["mobileJigram2"];
        if (title === "poke")
          imgRef.current.src = !mobile
            ? srcObj["poke2"]
            : srcObj["mobilePoke2"];
        if (title === "shopping")
          imgRef.current.src = !mobile
            ? srcObj["shopping2"]
            : srcObj["mobileShopping2"];

        btnRef.current?.childNodes.forEach((child: any, i: number) => {
          if (i === 1) {
            child.style.backgroundColor = "white";
            child.style.transform = "scale(1.3)";
          } else {
            child.style.backgroundColor = "lightgray";
            child.style.transform = "scale(1)";
          }
        });
      }
      if (num === 3) {
        if (title === "jigram")
          imgRef.current.src = !mobile
            ? srcObj["jigram3"]
            : srcObj["mobileJigram3"];
        if (title === "poke")
          imgRef.current.src = !mobile
            ? srcObj["poke3"]
            : srcObj["mobilePoke3"];
        if (title === "shopping")
          imgRef.current.src = !mobile
            ? srcObj["shopping3"]
            : srcObj["mobileShopping3"];

        btnRef.current?.childNodes.forEach((child: any, i: number) => {
          if (i === 2) {
            child.style.backgroundColor = "white";
            child.style.transform = "scale(1.3)";
          } else {
            child.style.backgroundColor = "lightgray";
            child.style.transform = "scale(1)";
          }
        });
      }
      if (num === 4) {
        if (title === "jigram")
          imgRef.current.src = !mobile
            ? srcObj["jigram4"]
            : srcObj["mobileJigram4"];
        if (title === "poke")
          imgRef.current.src = !mobile
            ? srcObj["poke4"]
            : srcObj["mobilePoke4"];
        if (title === "shopping")
          imgRef.current.src = !mobile
            ? srcObj["shopping4"]
            : srcObj["mobileShopping4"];

        btnRef.current?.childNodes.forEach((child: any, i: number) => {
          if (i === 3) {
            child.style.backgroundColor = "white";
            child.style.transform = "scale(1.3)";
          } else {
            child.style.backgroundColor = "lightgray";
            child.style.transform = "scale(1)";
          }
        });
      }
      if (num === 5) {
        if (title === "jigram")
          imgRef.current.src = !mobile
            ? srcObj["jigram5"]
            : srcObj["mobileJigram5"];
        if (title === "poke")
          imgRef.current.src = !mobile
            ? srcObj["poke5"]
            : srcObj["mobilePoke5"];

        btnRef.current?.childNodes.forEach((child: any, i: number) => {
          if (i === 4) {
            child.style.backgroundColor = "white";
            child.style.transform = "scale(1.3)";
          } else {
            child.style.backgroundColor = "lightgray";
            child.style.transform = "scale(1)";
          }
        });
      }
      if (num === 6) {
        if (title === "jigram")
          imgRef.current.src = !mobile
            ? srcObj["jigram6"]
            : srcObj["mobileJigram6"];

        btnRef.current?.childNodes.forEach((child: any, i: number) => {
          if (i === 5) {
            child.style.backgroundColor = "white";
            child.style.transform = "scale(1.3)";
          } else {
            child.style.backgroundColor = "lightgray";
            child.style.transform = "scale(1)";
          }
        });
      }
    }
  }

  return (
    <div className={styles.portFolioImage}>
      <div className={styles.imgs}>
        <img
          src="/imgs/computer.png"
          alt="컴퓨터"
          className={styles.img}
          ref={computerRef}
          onClick={() => onMobileSet("컴퓨터")}
        ></img>
        <img
          src="/imgs/smarthphone.png"
          alt="스마트폰"
          className={styles.img}
          ref={smartRef}
          onClick={() => onMobileSet("스마트폰")}
        ></img>
      </div>
      <div className={styles.imgContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} className={styles.img} ref={imgRef} alt="image"></img>
      </div>
      <div className={styles.btns} ref={btnRef}>
        <div
          style={{ backgroundColor: "white", transform: "scale(1.3)" }}
          onClick={() => onBtnClick(1)}
        ></div>
        <div onClick={() => onBtnClick(2)}></div>
        <div onClick={() => onBtnClick(3)}></div>
        <div onClick={() => onBtnClick(4)}></div>
        {(title === "poke" || title === "jigram") && (
          <div onClick={() => onBtnClick(5)}></div>
        )}
        {title === "jigram" && <div onClick={() => onBtnClick(6)}></div>}
      </div>
    </div>
  );
};

export default PortFolioImage;
