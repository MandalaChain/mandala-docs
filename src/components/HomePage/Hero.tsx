import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./hero.module.css";
export function Hero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{siteConfig.title}</h1>
      <p className={styles.subtitle}>{siteConfig.tagline}</p>
      <p className={styles.subtitle}>Building Bali's Web3 Future Together</p>
    </div>
  );
}
