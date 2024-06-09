import { Header } from "../components/common";
import { Blog, Contact, Footer, Hero, Missions, Pricing, Projects, Services, Testimonial, WhatWeDo } from "../components/home";

export default function HomePage() {

  return (
    <div className="flex flex-col gap-32">
      <Header />
      <Hero />
      <Services />
      <Missions />
      <Projects />
      <WhatWeDo />
      <Pricing />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}