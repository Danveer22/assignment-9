import { useState } from "react";
import styles from "./CTASection.module.css";

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function CTASection() {
  const [formState, setFormState] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = formState;

    if (isValidEmail(email)) {
      setFormState({ email: "", message: "" });
    } else {
      setFormState({
        email: "",
        message: "You have entered an invalid email address",
      });
    }
  };

  return (
    <section className={styles.cta}>
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up, and our free starter tier is
        extremely generous. If you have any questions, our support team would be
        happy to help you.
      </p>

      <form className={styles.ctaForm} onSubmit={handleSubmit}>
        <input
          type="email"
          value={formState.email}
          name="email"
          placeholder="email@example.com"
          onChange={handleChange}
          required
        />
        <button type="submit">Get Started For Free</button>
        {formState.message && (
          <p className={styles.message}>{formState.message}</p>
        )}
      </form>
    </section>
  );
}

export default CTASection;
