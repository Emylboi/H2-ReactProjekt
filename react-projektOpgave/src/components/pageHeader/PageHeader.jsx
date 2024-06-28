import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subTitle, headerImg, color }) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})`, '--title-color': color }}
    >
      <div className={styles.headerContent}>
        <h1 style={{color: color}}>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    </header>
  );
};

export default PageHeader;
