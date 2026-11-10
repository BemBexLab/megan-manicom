import AboutMe2 from '@/components/AboutMe2'
import ContactUs from '@/components/ContactUs'
import FAQs from '@/components/FAQs'
import MyCreativeProcess from '@/components/MyCreativeProcess'
import MyCreativeValues from '@/components/MyCreativeValues'
import MyExpertise from '@/components/MyExpertise'
import PageHero from '@/components/PageHero'

const page = () => {
  return (
    <section className='bg-white'>
        <PageHero
          heading="A Creative Mind Behind Meaningful Ideas."
          text="I'm Megan Manicom, a creative marketing specialist passionate about bringing stories, brands, and ideas to life through thoughtful design and purposeful marketing."
          buttonLabel="Work With Me"
          buttonHref="/contact"
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
        <AboutMe2 />
        <MyExpertise />
        <MyCreativeProcess
          eyebrowText="My Approach"
          heading="Every Detail Has a Purpose."
          text="I believe meaningful creative work begins with understanding the people and ideas behind each project."
          buttonLabel="Let's Work Together"
          buttonHref="/contact"
          steps={[
            { number: "01", title: "Listen First", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { number: "02", title: "Focus on the Details", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { number: "03", title: "Create With Intention", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { number: "04", title: "Bring It All Together", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
          ]}
        />
        <MyCreativeValues />
        <FAQs
          eyebrowText="FAQs"
          heading="Got Questions? I've Got Answers!"
          description="Everything you need to know about my creative services, working process, and how I can help bring your brand's vision to life."
          questions={[
            {
              question: "What types of projects do you work on?",
              answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
            },
            {
              question: "Do you work with first-time authors?",
              answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
            },
            {
              question: "Can I request a custom project?",
              answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
            },
            {
              question: "What should I include in my project inquiry?",
              answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
            },
            {
              question: "How do I get started?",
              answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
            },
          ]}
        />
        <ContactUs />
    </section>
  )
}

export default page
