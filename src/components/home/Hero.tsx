import { HERO, IHero } from "../../constances";
import { Button, Line } from "../ui";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function Hero() {
  return (
    <section className="">
      {/* Top */}
      <div className="">
        {/* Slider */}
        <div className="h-[70vh] overflow-x-hidden">
          <div className="grid grid-cols-[repeat(3,100%)]">
            {HERO.map((item, index) => <Slide {...item} key={index} />)}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="holder">
        {/* Left */}
        <div className="md:w-4/6 mt-8 flex items-center justify-between">
          {/* Links */}
          <div className="flex items-center gap-4">
            <a className="text-sm hover:opacity-70" href="/">Facebook</a>
            <a className="text-sm hover:opacity-70" href="/">Instagram</a>
            <a className="text-sm hover:opacity-70" href="/">Twitter</a>
            <a className="text-sm hover:opacity-70" href="/">Youtube</a>
          </div>

          {/* Controller */}
          <div className="flex items-center gap-2">
            <button className="h-8 aspect-square grid place-items-center bg-gray-400 hover:opactiy-70">
              <BiLeftArrow />
            </button>
            <button className="h-8 aspect-square grid place-items-center bg-gray-400 hover:opactiy-70">
              <BiRightArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Slide(props: IHero) {
  return (
    <div className="h-[70vh] relative overflow-x-hidden">
      <div className="h-full holder flex">
        {/* Left */}
        <div className="md:w-3/6 md:pb-8 flex flex-col items-center justify-center md:items-start gap-8">
          <p className="font-bold text-sm uppercase text-green-600">{props.short}</p>
          <h1 className="font-semibold text-6xl" dangerouslySetInnerHTML={{ __html: props.name }}></h1>
          <Line />
          <p className="max-w-[65ch] text-sm">{props.des}</p>
          <Button text={props.button} />
        </div>

        {/* Right */}
        <div className="md:w-3/6 relative">
          <div className="w-full md:w-auto md:h-[70vh] p-12 aspect-square md:absolute md:-right-[20%] bg-gray-400 rounded-full">
            <div className="w-full h-full aspect-square bg-blue-400 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}