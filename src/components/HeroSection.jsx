import styles from "./HeroSection.module.css";
function HeroSection() {
  return (
    <>
      <section className={styles.heroSection}>
        <img
          className={styles.heroImg}
          src="images/illustration-intro.png"
          alt="A person carrying a large file"
        />

        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className={styles.content}>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with   friends,
            family, and co-workers.
          </p>
          <button className={styles.btn}>Get Started</button>
        </div>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/bg-curvy-mobile.svg"
          />
          <img src="/images/bg-curvy-desktop.svg" className={styles.overlay} />
        </picture>
      </section>
      <div className={styles.backgroundOverlay}></div>
    </>
  );
}

export default HeroSection;
