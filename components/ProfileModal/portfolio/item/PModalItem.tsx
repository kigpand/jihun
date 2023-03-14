import { useRouter } from "next/router";
import styles from "./PModalItem.module.scss";

const PModalItem = ({ item }: any) => {
  const router = useRouter();

  const onClick = () => {
    router.push(item.url);
  };

  return (
    <div className={styles.PModalItem} onClick={onClick}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.content}>{item.content}</div>
    </div>
  );
};

export default PModalItem;
