import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.upperSection}>
          <h1>Join our community</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.</p>
        </section>

        <section className={styles.leftSection}>
          <h2>Monthly Subscription</h2>
          <p className={styles.price}>$29 <span>per month</span></p>
          <p className={styles.description}>Full access for less than $1 a day</p>
          <button className={styles.signUp}>Sign Up</button>
        </section>

        <section className={styles.rightSection}>
          <h2>Why Us</h2>
          <p className={styles.description}>Tutorials by industry experts
            Peer & expert code review
            Coding exercises
            Access to our GitHub repos
            Community forum
            Flashcard decks
            New videos every week</p>
        </section>
      </main>

      <footer>
        <p className={styles.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/AhsanCommits">Ahsan Commits</a>.
        </p>
      </footer>
    </>
  )
}
