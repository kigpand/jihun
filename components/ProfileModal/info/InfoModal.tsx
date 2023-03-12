import InfoCompany from "../../Info/InfoCompany";
import InfoHeader from "../../Info/InfoHeader";
import styles from "./InfoModal.module.scss";

const InfoModal = () => {
  return (
    <div className={styles.infoModal}>
      <InfoHeader />
      <InfoCompany />
    </div>
  );
};

export default InfoModal;
