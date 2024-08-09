import styles from "./FeatureSection.module.css";

function FeatureSection() {
  return (
    <section className={styles.featureSection}>
      <div className={styles.features}>
        <div>
          <img src="images/icon-access-anywhere.svg" alt="Access icon" />{" "}
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>

        <div>
          <img src="images/icon-security.svg" alt="Security icon" />{" "}
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div>
          <img src="images/icon-collaboration.svg" alt="Collaboration icon" />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        <div>
          <img src="images/icon-any-file.svg" alt="Storage icon" />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holiday photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
// width="1440"
//       height="449"
