// pages/about.js
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <Layout>
      <div>
        <h1 className={styles.title}>About Movieshare</h1>
        <p className={styles.description}>
          Movieshare is a platform where you can share and discover new movies. Our mission is to connect movie enthusiasts from around the world.
        </p>
      </div>
    </Layout>
  );
}
