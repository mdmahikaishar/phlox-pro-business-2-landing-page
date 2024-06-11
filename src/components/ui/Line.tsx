"use client";
import {motion} from "framer-motion";

export default function Line() {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1,  transition: { delay: 0.5 }}}
    >
      <div className="w-8 h-2  bg-gradient-to-r from-green-300 to-green-500 rounded-3xl"></div>
      <div className="w-28 h-2  bg-gradient-to-r from-green-400 to-yellow-400 rounded-3xl"></div>
    </motion.div>
  )
}