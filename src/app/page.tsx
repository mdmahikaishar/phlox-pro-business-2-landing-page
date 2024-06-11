import React from "react";
import { Header } from "../components/common";
import { Blog, Contact, Footer, Hero, Missions, Pricing, Projects, Services, Testimonial, WhatWeDo } from "../components/home";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 overflow-x-hidden">
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
  );
}
