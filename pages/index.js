import Head from 'next/head'
import Bg from '../components/background/bg'
import Card from '../components/card/card'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Country Quiz App</title>
        <meta name="description" content="Country Quiz app was created by Muhammad Faiz Khan foor the learning purpose only from DEV CHALLANGES IO." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bg/>
      <div className={styles.Heading}>
        <h1>Country Quiz</h1>
      </div>
       
       
      <div className={styles.CardContainer}>
        <Card/>
      </div>
      <Footer/>
    </div>
  )
}
