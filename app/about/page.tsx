import AboutMe2 from '@/components/AboutMe2'
import ContactUs from '@/components/ContactUs'
import FAQs from '@/components/FAQs'
import MyCreativeProcess from '@/components/MyCreativeProcess'
import MyCreativeValues from '@/components/MyCreativeValues'
import PageHero from '@/components/PageHero'

const page = () => {
  return (
    <section className='bg-white'>
        <PageHero />
        <AboutMe2 />
        <MyCreativeProcess />
        <MyCreativeValues />
        <FAQs />
        <ContactUs />
    </section>
  )
}

export default page