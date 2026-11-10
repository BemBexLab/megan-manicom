import ContactUs from '@/components/ContactUs'
import FAQs from '@/components/FAQs'
import MyCreativeProcess from '@/components/MyCreativeProcess'
import PageHero from '@/components/PageHero'
import React from 'react'

const page = () => {
  return (
    <section className='bg-white'>
        <PageHero />
        <MyCreativeProcess />
        <FAQs />
        <ContactUs />
    </section>
  )
}

export default page