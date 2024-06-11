"use client"
import { IService, SERVICES } from "../../constances";
import { Button, Line } from "../ui";
import {motion} from "framer-motion";

export default function Services() {
  return (
    <section className="py-20">
      <div className="holder text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {/* Left */}
        <div className="lg:w-2/6 flex flex-col items-center lg:items-start gap-4 sm:gap-8">
          <motion.h1
            className="max-w-[30ch] text-2xl sm:text-4xl capitalize"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: 0 }}}
          >
             We Are Here To Make Your <span className="text-green-700">Website</span> Look More <span className="text-green-700">Elegant</span> And Stylish!
          </motion.h1>
          <Line />
          <Button text="View All" variant="primary" />
        </div>

        {/* Right */}
        <div className="lg:w-4/6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map(item => (
            <ServiceCard {...item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  )
}



function ServiceCard(props: IService) {
  return (
    <motion.div
      className="w-full p-4 md:p-8 border-2 border-gray-100 rounded-3xl shadow-2xl transition-all cursor-pointer hover:scale-90"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1,  transition: { delay: 0.5 }}}
    >
      <props.icon className="mx-auto lg:mx-0 mb-6 text-7xl text-green-700" />
      <h1 className="mb-4 text-2xl">{props.name}</h1>
      <p className="text-sm opacity-70">{props.des}</p>
    </motion.div>
  )
}