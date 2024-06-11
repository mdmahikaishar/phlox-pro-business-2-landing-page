"use client";
import { motion } from "framer-motion";
import { Button, Line } from "../ui";

export default function Missions() {
  return (
    <section className="py-20 relative">
      <div className="holder flex flex-col lg:flex-row">
        {/* Left */}
        <div className="mb-8 lg:mb-0 lg:w-3/6 aspect-square"></div>
        <motion.div
          className="w-10/12 lg:w-2/6 aspect-square absolute -left-8 gradient-green my-shadow-green rounded-3xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1,  transition: { delay: 0 }}}
        >
          <motion.div
            className="w-full h-full aspect-video absolute left-20 top-12 lg:top-8 bg-white bg-cover rounded-3xl shadow-2xl"
            style={{backgroundImage: `url(/vite.svg)`}}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: 0.5 }}}
          ></motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="lg:w-3/6 text-center lg:text-left flex flex-col items-center lg:items-start gap-4 sm:gap-8"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1,  transition: { delay: 1 }}}
        >
          <motion.h1
            className="text-2xl sm:text-4xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: .5 }}}
          >About our <span className="text-gray-700">Missions</span></motion.h1>
          <Line />
          <motion.p
            className="max-w-[65ch] text-xs sm:text-sm opacity-70"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: .75 }}}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis sequi nihil possimus quidem iste cupiditate voluptates vero cumque numquam laborum eveniet, perferendis repellat inventore, dignissimos eaque aspernatur? Aspernatur iure officiis fugit quo ad totam vitae! Cum sed accusamus illum, voluptates odio tempore nesciunt, quos quis vero quaerat quas porro?</motion.p>
          <Button text="Read More" />
        </motion.div>
      </div>
    </section>
  )
}