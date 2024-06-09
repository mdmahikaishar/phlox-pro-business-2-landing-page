import { WHAT_WE_DO } from "../../constances"
import { Line } from "../ui"
import { BiCheck} from "react-icons/bi"

export default function WhatWeDo() {
  return (
    <section className="pt-16 pb-36">
      <div className="holder">
        <div className="relative flex flex-col lg:flex-row items-center gap-[-4rem]">
          {/* lEFT */}
          <div className="w-full lg:w-4/6 aspect-square"></div>
          <div className="w-full lg:w-[55%] aspect-square absolute top-0 p-[5%] pb-[30%] lg:pb-[5%] flex flex-col items-center justify-center gap-8 bg-green-700 text-white rounded-3xl">
            <h1 className="text-7xl">280</h1>
            <span className="text-sm uppercase">Projects</span>

            <div className="flex items-center gap-8">
              <InfoCard name="Users' Comments" count="+3,500" />
              <div className="w-1 h-12 bg-white/20 rounded-full"></div>
              <InfoCard name="Happy Clients" count="100%" />            
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-4/6 aspect-square"></div>

          <div className="lg:w-[55%] aspect-square absolute top-2/4 -translate-y-1/4 lg:translate-y-0 right-0 p-[7.5%] flex flex-col gap-8 bg-white rounded-3xl shadow-2xl">
            <h1 className="max-w-[12ch] font-semibold text-5xl">We <span className="text-green-700">Love</span> What We Do</h1>
            <Line />
            <p className="text-sm opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, recusandae error. Facere culpa amet sunt nihil quasi delectus, alias vero veniam aperiam doloremque blanditiis, autem atque.</p>

            <div className="flex flex-col gap-4">
              {WHAT_WE_DO.map((item, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <BiCheck  className="text-sm text-green-700" />
                  <p className="text-sm opactiy-70">{item}</p>
                </div>
              ))}
            </div>          
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard(props: { name: string, count: string,}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h3 className="text-3xl">{props.count}</h3>
      <span className="text-sm uppercase">{props.name}</span>
    </div>
  )
}