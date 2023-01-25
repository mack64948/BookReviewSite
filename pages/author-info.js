import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function AuthorInfo() {
  return (
    <>
    <Layout>

    <Image
            src="/images/keigo-higashino.jpeg" // Route of the image file
            height={500} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            alt="Amazing Book Reviews Logo"
            style={{
              float: "left",
              marginBottom: "20px",
              borderRadius: "10px",
              marginRight: "20px"
    
            }}
        />
      <section>
        <h2>Keigo Higashino: Background</h2>
        <p>
        This site is dedicated to Keigo Higashino's tour de force, Devotion of Suspect X, a popular detective novel that has been made into several film versions in China, Korea, and Japan. It's cross-cultural appeal stems not only from its fast-paced and suspenseful narrative but also from it capacity for raising philosophical and existential questions. If you love the novel too and have insights of your own, please don't hesitate to leave comments and provide your feedback. Donations are much appreciated as well, as book reviews like these require much careful time and effort. I hope to be able to provide additional book reviews in the future. If you have particular requests for book reviews or are in need of help that requires literary analysis, drop me a line. With that, thank you for your support.
        </p>
      </section>
    </Layout>
    </>
  )
}
