import styles from "./ShowcaseSection.module.css";

function ShowcaseSection() {
  return (
    <section className={styles.showcaseSection}>
      <figure className={styles.imageWrapper}>
        <img
          src="/images/illustration-stay-productive.png"
          alt="Stay productive"
          className={styles.showcaseImage}
        />
      </figure>
      <div className={styles.showcaseContent}>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family, and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#" className={styles.ctaButton}>
          See how Fylo works
          <span className={styles.arrowIcon}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </a>
      </div>
    </section>
  );
}

export default ShowcaseSection;
