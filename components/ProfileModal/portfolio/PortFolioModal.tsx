import PModalItem from "./item/PModalItem";
import styles from "./PortFolioModal.module.scss";

const PortfolioArr = [
  { title: "Pokemon 도감", content: "poke api를 활용한 웹앱 포켓몬 도감" },
  { title: "Jistargram", content: "NextJS 기반 인스타그램 클론 사이트" },
  { title: "중고거래", content: "개인 공부용 개발 중고거래 사이트" },
];

const PortFolioModal = () => {
  return (
    <div className={styles.portFolioModal}>
      {PortfolioArr.map((item: any, i: number) => {
        return <PModalItem item={item} key={i} />;
      })}
    </div>
  );
};

export default PortFolioModal;
