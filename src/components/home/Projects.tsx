"use client";
import { motion } from "framer-motion";
import { IProject, PROJECTS } from "../../constances";
import { Line } from "../ui";

export default function Projects() {
  return (
    <section className="">
      {/* Top */}
      <div className="mb-8 holder flex flex-col lg:flex-row lg:items-end gap-4 sm:gap-8">
        {/* Left */}
        <div className="lg:w-2/6 flex flex-col gap-4 sm:gap-8">
          <Line />
          <motion.h1
          className="text-2xl sm:text-5xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: 0 }}}
          >Our recent <span className="text-green-700">web designs</span> & some examples of past <span className="text-green-700">projects</span>
          </motion.h1>
          <Line />
        </div>
        {/* Right */}
        <div className="lg:w-4/6 flex flex-col lg:items-end lg:justify-end gap-4 lg:gap-8">
          <motion.p
            className="max-w-[60ch] text-xs sm:text-sm opacity-70"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: 0.5 }}}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit iure consequuntur maxime porro, quis debitis dolorem facilis excepturi accusantium fugiat saepe. In atque, maxime, nam minima architecto sequi ratione aspernatur ad sapiente quas quae veritatis neque alias a ipsa cum sunt beatae fugiat obcaecati reprehenderit! Deleniti, dolorum itaque!
          </motion.p>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {PROJECTS.map((item, index) => <ProjectCard {...item} key={index} />)}
      </div>
    </section>
  )
}

function ProjectCard(props: IProject) {
  return (
    <motion.div
      className="w-full aspect-square bg-white bg-cover rounded-lg overflow-hidden shadow-md"
      style={{backgroundImage: `url('${props.img}')`}}
      initial={{ x: -100, y: -100, opacity: 0 }}
      whileInView={{ x: 0, y:0, opacity: 1,  transition: { delay: 0.5 }}}
    >
    </motion.div>
  )
}