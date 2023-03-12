import styles from "./PModalItem.module.scss";

const PModalItem = ({ item }: any) => {
  return (
    <div className={styles.PModalItem}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.content}>{item.content}</div>
    </div>
  );
};

export default PModalItem;
