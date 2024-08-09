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
        <h2>
          Stay productive,
          <br /> wherever you are
        </h2>
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
          <img
            src="/images/icon-arrow.svg"
            alt="Arrow icon"
            className={styles.arrowIcon}
          />
        </a>
      </div>
    </section>
  );
}

export default ShowcaseSection;
