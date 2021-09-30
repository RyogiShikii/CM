import Head from 'next/head'
import Inform from '../components/pandemicInfo/Inform';
import SlideBanner from '../components/banner/SlideBanner';
import Category from '../components/serviceCategory/Category';

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
      <Category />
    </div>
  )
}
