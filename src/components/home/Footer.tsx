"use client";
import React from "react";
import { BiLogoFacebook, BiLogoPinterest, BiLogoTwitter } from "react-icons/bi";
import { Line } from "../ui";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="">
      <div className="py-20 holder grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-4">
        <motion.div className=""
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1,  transition: { delay: 0.5 }}}
        >
          <div className="mb-10">
            <a className="header-logo" href="/">
              <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cropped-Group-39@2x.png" alt="logo" />
            </a>
          </div>

          <p className="max-w-[50ch] text-sm opacity-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aut dicta a architecto, eligendi minima assumenda quia officia debitis vel necessitatibus! Cumque esse illum enim error optio velit corporis dolor?</p>
        </motion.div>

        <FooterCard name="Quick Link">
          <div className="flex flex-col gap-2">
            <a className="text-sm text-black/70 hover:opacity-70" href="/">Careers</a>
            <a className="text-sm text-black/70 hover:opacity-70" href="/">News</a>
            <a className="text-sm text-black/70 hover:opacity-70" href="/">Terms of use</a>
            <a className="text-sm text-black/70 hover:opacity-70" href="/">Privary Project</a>
            <a className="text-sm text-black/70 hover:opacity-70" href="/">About</a>
            <a className="text-sm text-black/70 hover:opacity-70" href="/">Contact</a>
          </div>
        </FooterCard>

        <FooterCard name="Contact">
          <p className="text-sm opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="text-sm opacity-70">email@email.com</p>
          <p className="text-sm opacity-70">+88 0015845 4687</p>
        </FooterCard>

        <FooterCard name="Location">
          <div className="max-w-sm w-full aspect-video bg-red-500 rounded-xl overflow-hidden">
            <iframe className="w-full h-full" src="https://location.goole.com/dhaka"></iframe>
          </div>
        </FooterCard>
      </div>

      <div className="p-4 md:p-8 flex items-center justify-between gradient-black text-white">
        <p className="text-xs sm:text-sm text-white/50">@2024 PHOLOX BUISNNES TEHEM.</p>

        <div className="flex items-center sm:gap-2">
          <a className="w-8 h-8 grid place-items-center" href=""><BiLogoFacebook /></a>
          <a className="w-8 h-8 grid place-items-center" href=""><BiLogoTwitter /></a>
          <a className="w-8 h-8 grid place-items-center" href=""><BiLogoPinterest/></a>
        </div>
      </div>
    </section>
  )
}

function FooterCard(props: {name: string, children: React.ReactNode}) {
  return (
    <motion.div className="flex flex-col gap-2 sm:gap-4"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1,  transition: { delay: 0.5 }}}
    >
      <div className="mb-4 flex flex-col gap-2 sm:gap-4">
        <h2 className="font-semibold text-2xl">{props.name}</h2>
        <Line />
      </div>

      {props.children}
    </motion.div>
  )
}