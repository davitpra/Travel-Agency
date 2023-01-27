import { Hero } from '@/container/Hero'
import { OurRecomendation } from '@/container/OurRecomendation'
import { TrendingStays } from '@/container/TrendingStays'
import { FAQs } from '@/container/FAQs'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/container/Footer'

export default function Home () {
  return (
    <>
      <Navbar />
      <section className='w-full h-auto '>
        <Hero />
        <OurRecomendation />
        <TrendingStays />
        <FAQs />
        <Footer />
      </section>
      <div id='tab_bar' />
    </>
  )
}
