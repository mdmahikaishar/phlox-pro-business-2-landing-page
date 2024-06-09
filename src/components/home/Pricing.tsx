import { IPricing, PRICING } from "../../constances";
import { Line } from "../ui";
import { BiCheck } from "react-icons/bi"

export default function Pricing() {
  return (
    <section className="">
      <div className="holder flex flex-col lg:flex-row gap-8">
        {/* Left */}
        <div className="md:w-2/6 text-center lg:text-left flex flex-col items-center lg:items-start gap-8">
          <h1 className="max-w-[10ch] text-5xl">
            What <br/>
            <span className="text-green-700">
              Live Chat<br/>24/7
            </span>
            Support
          </h1>
          <Line />
          <p className="max-w-[60ch] text-sm opacity-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ducimus dicta in quos placeat possimus sunt nulla nesciunt nam expedita! Dicta corrupti, eveniet blanditiis officia omnis consequatur laboriosam rem dolorem!</p>
        </div>

        {/* Right */}
        <div className="md:w-4/6 p-4 md:-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {PRICING.map(item => <PricingCard {...item} key={item.name} />)}
        </div>
      </div>
    </section>
  )
}

function PricingCard(props: IPricing) {
  return (
    <div className={`rounded-3xl border-green-700 overflow-hidden shadow-2xl`}>
      <div className={`py-4 bg-green-700`}>
        <div className="p-4 text-center bg-white">
          <h1 className="font-semibold text-2xl uppercase">{props.name}</h1>
          <p className="text-sm opacity-70">{props.des}</p>
        </div>

        <div className="p-8 text-center text-white">
          <p className="">
            <span className="text-3xl">$ </span>
            <span className="text-4xl">{props.price} </span>
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
    </div>
  )
}