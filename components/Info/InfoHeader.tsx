import Image from "next/image";
import { infoObj } from "../../common/infoObj";
import { IInfoItem } from "../../interface/IInfoItem";
import styles from "./InfoHeader.module.scss";
import InfoHeaderItem from "./InfoHeaderItem";

const InfoHeader = () => {
  return (
    <div className={styles.infoHeader}>
      <div className={styles.title}>
        <div className={styles.titleItem}>Info</div>
      </div>
      <div className={styles.main}>
        <Image
          src="/imgs/me.jpg"
          alt="github"
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
        ></Image>
        <div className={styles.info}>
          {infoObj.map((info: IInfoItem) => {
            return (
              <InfoHeaderItem
                title={info.title}
                text={info.text}
                key={info.title}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.infoLine} />
    </div>
  );
};

export default InfoHeader;
