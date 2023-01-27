import { Hero } from '@/container/Hero'
import { OurRecomendation } from '@/container/OurRecomendation'
import { TrendingStays } from '@/container/TrendingStays'
import { FAQs } from '@/container/FAQs'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Home () {
  return (
    <>
      <Navbar />
      <div id='tab_bar' />
      <section className='w-full h-screen '>
        <Hero />
        <OurRecomendation />
        <TrendingStays />
        <FAQs />
        <Footer />
      </section>

    </>
  )
}
