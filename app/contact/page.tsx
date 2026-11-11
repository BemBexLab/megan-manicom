import type { Metadata } from 'next'
import ContactUs from '@/components/ContactUs'
import PageHero from '@/components/PageHero'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Have a brand, book launch, or creative project in mind? Contact Megan Manicom to discuss social media marketing, content, and design services.',
  alternates: {
    canonical: '/contact',
  },
}

const page = () => {
  return (
    <section className='bg-white'>
        <PageHero
          heading="Let's Create Something Amazing Together."
          text="Have a creative idea, an upcoming book launch, or a brand that needs a fresh perspective? I'd love to hear about it. Let's connect and bring your vision to life."
          buttonLabel="Work With Me"
          buttonHref="mailto:info@meganmanicom.com"
          rating="4.8/5"
          clientLabel={"500+ Happy\nClient Worldwide"}
          clientAvatars={["/home/Ellipse 5.webp", "/home/Ellipse 6.webp", "/home/Ellipse 7.webp", "/home/Ellipse 8.webp"]}
          partnersHeading="Our Trusted Partners"
          partnerLogos={[
            { name: "LOCO", src: "/home/Logo (4).webp", width: 112, height: 26 },
            { name: "Infinity", src: "/home/Logo (1).webp", width: 50, height: 20 },
            { name: "N", src: "/home/Logo (2).webp", width: 33, height: 28 },
            { name: "IPSUM", src: "/home/Logo (3).webp", width: 108, height: 26 },
          ]}
        />
        <ContactUs />
    </section>
  )
}

export default page
