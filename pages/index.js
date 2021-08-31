import Head from 'next/head'
import Inform from '../components/inform';
import SlideBanner from '../components/SlideBanner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CashMart Payaday Loan</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Inform />
      <SlideBanner />
    </div>
  )
}
