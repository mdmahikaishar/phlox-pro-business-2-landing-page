"use client";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="">
      <div className="w-full min-h-screen p-4 md:p-8 text-center flex flex-col items-center justify-center bg-fill bg-no-repeat gap-8 text-white"
        style={{
          background: `url('/'), linear-gradient(to bottom left, rgba(17, 17, 17, .90), rgba(82, 82, 82, .95))`,
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto font-bold text-4xl text-green-700">,,</div>
        <motion.p
          className="max-w-[70ch] sm:text-xl"
          initial={{ scale:0, opacity: 0 }}
          whileInView={{ scale:1, opacity: 1,  transition: { delay: 0 }}}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit odio dignissimos fugit distinctio deleniti fugiat repellat, accusantium non quo quidem quam voluptatem cum eveniet pariatur vero, ipsum ipsam iste facere obcaecati dolore! Placeat perspiciatis autem veniam at odio nam eligendi!
        </motion.p>
        <div className="mx-auto font-bold text-4xl text-green-700">,,</div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1,  transition: { delay: 0.5 }}}
        >
          <div className="h-20 aspect-square bg-white bg-cover rounded-full overflow-hidden" style={{backgroundImage: `url('/vite.svg')`}}></div>
          <h1 className="text-xl uppercase text-green-700">Lissa Durbin</h1>
          <p className="font-semibold text-sm">Client</p>
        </motion.div>
      </div>
    </section>
  )
}