"use client";
import { motion } from "framer-motion";
import { IPricing, PRICING } from "../../constances";
import { Line } from "../ui";
import { BiCheck } from "react-icons/bi"

export default function Pricing() {
  return (
    <section className="mb-32">
      <div className="holder flex flex-col lg:flex-row gap-8">
        {/* Left */}
        <div className="lg:w-2/6 text-center lg:text-left flex flex-col items-center lg:items-start gap-4 sm:gap-8">
          <motion.h1
            className="max-w-[10ch] text-2xl sm:text-5xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: 0 }}}
          >
            What <br/>
            <span className="text-green-700">
              Live Chat<br/>24/7
            </span>
            Support
          </motion.h1>
          <Line />
          <motion.p
            className="max-w-[60ch] text-xs sm:text-sm opacity-70"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  transition: { delay: 0.5 }}}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ducimus dicta in quos placeat possimus sunt nulla nesciunt nam expedita! Dicta corrupti, eveniet blanditiis officia omnis consequatur laboriosam rem dolorem!
          </motion.p>
        </div>

        {/* Right */}
        <div className="lg:w-4/6 p-4 lg:-8 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {PRICING.map(item => <PricingCard {...item} key={item.name} />)}
        </div>
      </div>
    </section>
  )
}

function PricingCard(props: IPricing) {
  return (
    <motion.div
      className={`max-w-md w-full border-b-4 rounded-3xl ${props.type === "primary" ? "border-green-700": "border-gray-900"} overflow-hidden shadow-2xl`}
      initial={{ x: 100, y:100, opacity: 0 }}
      whileInView={{ x: 0,y:0, opacity: 1,  transition: { delay: 0.5 }}}
    >
      <div className={`py-6 ${props.type === "primary" ? "gradient-green": "gradient-black"}`}>
        <div className="p-4 text-center bg-white">
          <h1 className="font-semibold text-xl sm:text-2xl uppercase">{props.name}</h1>
          <p className="text-xs sm:text-sm opacity-70">{props.des}</p>
        </div>

        <div className="pt-8 pb-4 text-center text-white">
          <p className="">
            <span className="text-xl sm:text-3xl">$ </span>
            <span className="text-2xl sm:text-4xl">{props.price} </span>
            / {props.priceFor}
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 pb-8 flex flex-col items-center justify-center gap-4">
        {props.features.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <BiCheck className="" />
            <p className="text-sm opactiy-70">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}