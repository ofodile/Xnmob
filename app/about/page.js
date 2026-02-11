export const metadata = {
  title: "About Us | Naijaleakhub",
  description:
    "Learn more about Naijaleakhub, your ultimate destination for premium adult entertainment with high-quality streaming and regular updates.",
};

export default function About() {
  return (
    <main style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About Us</h1>

        <p style={styles.paragraph}>
          Welcome to <strong>Naijaleakhub</strong>, your ultimate
          destination for premium adult entertainment.
        </p>

        <p style={styles.paragraph}>
          We created this platform with one simple goal to deliver
          high-quality, exciting, and regularly updated adult video content in
          a smooth and user-friendly experience. Whether you're here for
          trending videos, exclusive uploads, or timeless classics, we bring
          everything together in one place for your enjoyment.
        </p>

        <h2 style={styles.subheading}>Our Mission</h2>

        <p style={styles.paragraph}>
          Our mission is to provide a fast, secure, and enjoyable viewing
          experience for adults who appreciate premium entertainment.
        </p>

        <ul style={styles.list}>
          <li>High-quality video streaming</li>
          <li>Easy navigation and fast loading speeds</li>
          <li>Regular content updates</li>
          <li>Mobile-friendly browsing</li>
          <li>Privacy-focused user experience</li>
        </ul>

        <p style={styles.paragraph}>
          We understand how important discretion and security are. That’s why
          we prioritize a safe and seamless environment for our visitors.
        </p>

        <h2 style={styles.subheading}>What Makes Us Different?</h2>

        <p style={styles.paragraph}>
          At <strong>Naijaleakhub</strong>, we don’t just upload content, 
          we curate it carefully to ensure quality and relevance.
        </p>

        <ul style={styles.list}>
          <li>Trending and viral adult clips</li>
          <li>Organized categories for easy discovery</li>
          <li>Clean and modern website design</li>
          <li>Minimal interruptions while browsing</li>
        </ul>

        <p style={styles.paragraph}>
          Our platform is built to ensure that you spend less time searching
          and more time enjoying.
        </p>

        <h2 style={styles.subheading}>18+ Disclaimer</h2>

        <p style={styles.paragraph}>
          This website is strictly for adults aged 18 years and above (or the
          legal age in your jurisdiction). By accessing our platform, you
          confirm that you meet the legal age requirement.
        </p>

        <p style={styles.paragraph}>
          We do not tolerate illegal or non-consensual content. If you believe
          any content violates copyright or guidelines, please contact us
          immediately for review and removal.
        </p>

        <h2 style={styles.subheading}>Stay Connected</h2>

        <p style={styles.paragraph}>
          We’re constantly improving and expanding our content library.
          Bookmark us and check back regularly for fresh uploads and exclusive
          videos.
        </p>

        <p style={styles.paragraph}>
          Thank you for choosing <strong>Naijaleakhub</strong> where
          premium adult entertainment meets quality and convenience.
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
    color: "black",
  },
  list: {
    marginBottom: "20px",
    paddingLeft: "20px",
    color: "black",
  },
};
