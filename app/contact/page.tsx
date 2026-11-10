import ContactUs from '@/components/ContactUs'
import PageHero from '@/components/PageHero'
import React from 'react'

const page = () => {
  return (
    <section className='bg-white'>
        <PageHero />
        <ContactUs />
    </section>
  )
}

export default page