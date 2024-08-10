import styles from "./TestimonialSection.module.css";

function TestimonialSection() {
  return (
    <section className={styles.testimonials}>
      <figure className={styles.testimonial}>
        <blockquote>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </p>
          <footer>
            <img
              src="/images/profile-1.jpg"
              alt="satish profile"
              className={styles.profile}
            />
            <cite>
              <span className={styles.testimonialName}>Satish Patel</span>
              <span className={styles.testimonialDesignation}>
                Founder & CEO, Huddle
              </span>
            </cite>
          </footer>
        </blockquote>
      </figure>
      <figure className={styles.testimonial}>
        <blockquote>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </p>
          <footer>
            <img
              src="/images/profile-2.jpg"
              alt="Bruce Mckenzie profile"
              className={styles.profile}
            />
            <cite>
              <span className={styles.testimonialName}>Bruce Mckenzie</span>
              <span className={styles.testimonialDesignation}>
                Founder & CEO, Huddle
              </span>
            </cite>
          </footer>
        </blockquote>
      </figure>
      <figure className={styles.testimonial}>
        <blockquote>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </p>
          <footer>
            <img
              src="/images/profile-3.jpg"
              alt="Iva Boyd profile"
              className={styles.profile}
            />
            <cite>
              <span className={styles.testimonialName}>Iva Boyd</span>
              <span className={styles.testimonialDesignation}>
                Founder & CEO, Huddle
              </span>
            </cite>
          </footer>
        </blockquote>
      </figure>
    </section>
  );
}

export default TestimonialSection;
