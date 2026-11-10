import ContactUs from '@/components/ContactUs'
import CustomerTestimonials from '@/components/CustomerTestimonials'
import PageHero from '@/components/PageHero'
import React from 'react'

const page = () => {
  return (
    <section className='bg-white'>
        <PageHero />
        <CustomerTestimonials />
        <ContactUs />
    </section>
  )
}

export default page