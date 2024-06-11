"use client";
import { motion } from "framer-motion";
import { BLOG, IBlog } from "../../constances";
import { Button, Line } from "../ui";
import { BiCircle } from "react-icons/bi";

export default function Blog() {
  return (
    <section className="py-20">
      <div className="holder">
        <div className="mb-8 text-center flex flex-col items-center justify-center gap-4 sm:gap-8">
          <motion.h1 className="font-semibold text-2xl sm:text-4xl text-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: 0 }}}
          >
            Latest News & Our <span className="text-green-700">Blog</span>
          </motion.h1>
          <Line />
        </div>

        <div className="pb-20 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-4">
          {BLOG.map((item, index) => <BlogCard {...item} key={index} />)}
        </div>

        <Button className="mx-auto" text="View All Post"/>
      </div>
    </section>
  )
}

function BlogCard(props: IBlog) {
  return (
    <motion.div
      className="aspect-square bg-white bg-cover relative rounded-md shadow-2xl"
      style={{backgroundImage: `url('${props.img}')`}}
      initial={{ x: 100, y:100, opacity: 0 }}
      whileInView={{ x: 0, y:0, opacity: 1,  transition: { delay: 0.5 }}}
    >
      <motion.div
        className="w-10/12 px-4 py-4 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-white rounded-md shadow-2xl"
      >
        <p className="mb-2 pl-6 text-xs font-semibold opacity-70">{props.date} - by {props.userName}</p>

        <div className="flex items-center gap-2">
          <BiCircle className="text-sm sm:text-base text-green-700" />
          <h1 className="font-semibold sm:text-xl">
            {props.name}
          </h1>
        </div>
      </motion.div>
    </motion.div>
  )
}