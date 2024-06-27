import styles from "./sectionHeader.module.css";

const SectionHeader = ({title}) => {
  return (
    <>
      <header>
        <div className={styles.headerContent}>
            <h2>{title}</h2>
        </div>
      </header>
    </>
  );
};

export default SectionHeader;
