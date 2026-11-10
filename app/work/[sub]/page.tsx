import ContactUs from '@/components/ContactUs'
import CustomerTestimonials from '@/components/CustomerTestimonials'
import PageHero from '@/components/PageHero'
import React from 'react'

const page = () => {
  return (
    <section className='bg-white'>
        <PageHero
          heading="Creativity That Builds Stronger Connections."
          text={`Explore how I bring creative ideas, thoughtful strategies, and engaging content together to help brands strengthen their digital presence and connect with their audience.`}
          buttonLabel='Discuss a Project'
          buttonHref='/contact'
          rating="4.8/5"
          clientLabel="500+ Happy Clients Worldwide"
          clientAvatars={["/home/Ellipse 5.webp", "/home/Ellipse 6.webp", "/home/Ellipse 7.webp", "/home/Ellipse 8.webp"]}
          partnersHeading="Our Trusted Partners"
          partnerLogos={[
            { name: "LOCO", src: "/home/Logo (4).png", width: 112, height: 26 },
            { name: "Infinity", src: "/home/Logo (1).png", width: 50, height: 20 },
            { name: "N", src: "/home/Logo (2).png", width: 33, height: 28 },
            { name: "IPSUM", src: "/home/Logo (3).png", width: 108, height: 26 },
          ]}
        />
        <CustomerTestimonials />
        <ContactUs />
    </section>
  )
}

export default page
