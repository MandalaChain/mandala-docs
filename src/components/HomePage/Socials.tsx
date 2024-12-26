import styles from "./socials.module.css";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/mandalaChain",
    imageCssVariableName: "--socials-github",
  },
  {
    name: "Twitter",
    href: "https://x.com/MandalaChain",
    imageCssVariableName: "--socials-twitter",
  },
  {
    name: "Telegram",
    href: "https://t.me/mandalachain",
    imageCssVariableName: "--socials-telegram",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/MwUQgQZgxm",
    imageCssVariableName: "--socials-discord",
  },
];

export function Socials(): JSX.Element {
  return (
    <div className={styles.socialsWrapper}>
      <div className={styles.socialsLinks}>
        {socials.map((social) => (
          <a
            key={social.name}
            className={styles.socialsLink}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={styles.socialsIcon}
              style={{ backgroundImage: `var(${social.imageCssVariableName})` }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
