export const metadata = {
  title: "Contact Us | Naijaleakhub",
  description:
    "Get in touch with Naijaleakhub for inquiries, support, copyright issues, or general questions.",
};

export default function ContactPage() {
  return (
    <main style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Contact Us</h1>

        <p style={styles.paragraph}>
          If you have any questions, business inquiries, technical issues, or
          copyright concerns, feel free to reach out to us. We value your
          feedback and aim to respond as quickly as possible.
        </p>

        <h2 style={styles.subheading}>General Inquiries</h2>
        <p style={styles.paragraph}>
          For general questions, suggestions, or support, please email us at:
        </p>
        <p style={styles.email}>
          support@naijaleakhub.com.ng
        </p>

        <h2 style={styles.subheading}>Copyright & Content Removal</h2>
        <p style={styles.paragraph}>
          We respect content ownership and do not tolerate unauthorized or
          non-consensual content. If you believe any material on our platform
          violates your copyright or rights, please send us a detailed message
          including:
        </p>

        <ul style={styles.list}>
          <li>Your full name and contact information</li>
          <li>The exact URL of the content in question</li>
          <li>Proof of ownership or authority</li>
          <li>A brief explanation of the issue</li>
        </ul>

        <p style={styles.paragraph}>
          Send all removal requests to:
        </p>
        <p style={styles.email}>
          dmca@naijaleakhub.com.ng
        </p>

        <h2 style={styles.subheading}>Contact Form</h2>

        <form style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            style={styles.textarea}
            required
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        <p style={styles.disclaimer}>
          Please note: This website is strictly for adults aged 18 years and
          above. By contacting us, you confirm that you meet the legal age
          requirement in your jurisdiction.
        </p>
      </div>
    </main>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  },
  content: {
    maxWidth: "800px",
    color: "black",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "24px",
    marginTop: "30px",
    marginBottom: "10px",
  },
  paragraph: {
    marginBottom: "15px",
    fontSize: "16px",
    color: "#black",
  },
  email: {
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ff4444",
  },
  list: {
    marginBottom: "20px",
    paddingLeft: "20px",
    color: "black",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontSize: "14px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#ff4444",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  disclaimer: {
    marginTop: "30px",
    fontSize: "14px",
    color: "#888",
  },
};
