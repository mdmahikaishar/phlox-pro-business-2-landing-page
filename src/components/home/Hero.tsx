"use client";
import { useState } from "react";
import { HERO, IHero } from "../../constances";
import { Button, Line } from "../ui";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleNext = () => {
    setActiveSlide(pre => pre < HERO.length - 1 ? pre + 1 : 0);
  }
  const handlePrevious = () => {
    setActiveSlide(pre => pre > 0 ? pre - 1 : HERO.length -1);
  }

  return (
    <section className="py-8">
      {/* Top */}
      <div className="">
        <Slider activeSlide={activeSlide} />
      </div>

      {/* Bottom */}
      <div className="holder">
        {/* Left */}
        <div className="md:w-4/6 mt-8 flex items-center justify-between">
          {/* Links */}
          <div className="flex items-center gap-2 md:gap-4">
            <a className="font-semibold text-xs md:text-sm hover:opacity-70" href="/">Facebook</a>
            <a className="font-semibold text-xs md:text-sm hover:opacity-70" href="/">Instagram</a>
            <a className="font-semibold text-xs md:text-sm hover:opacity-70" href="/">Twitter</a>
            <a className="font-semibold text-xs md:text-sm hover:opacity-70" href="/">Youtube</a>
          </div>

          {/* Controller */}
          <div className="flex items-center gap-2">
            <button className="h-6 sm:h-8 aspect-square grid place-items-center bg-gray-400 hover:bg-gray-300" onClick={handlePrevious}>
              <BiLeftArrow />
            </button>
            <button className="h-6 sm:h-8 aspect-square grid place-items-center bg-gray-400 hover:bg-gray-300" onClick={handleNext}>
              <BiRightArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Slider({ activeSlide }: { activeSlide: number }) {
  return (
    <div className="h-max overflow-x-hidden">
      <div className="h-max grid grid-cols-[repeat(3,100%)] transition-all duration-700" style={{transform: `translateX(calc(-${activeSlide} * 100%))`}}>
        {HERO.map((item, index) => <Slide {...item} key={index} />)}
      </div>
    </div>
  )
}

function Slide(props: IHero) {
  return (
    <div className="h-max relative overflow-x-hidden">
      <div className="h-max md:h-[70vh] holder flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0">
        {/* Left */}
        <div className="md:w-3/6 py-12 md:py-8 flex flex-col justify-center gap-4 sm:gap-8">
          <p className="font-bold text-xs sm:text-sm md:text-base uppercase text-green-600">{props.short}</p>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-6xl" dangerouslySetInnerHTML={{ __html: props.name }}></h1>
          <Line />
          <p className="max-w-[65ch] text-sm sm:text-base">{props.des}</p>
          <Button text={props.button} />
        </div>

        {/* Right */}
        <div className="flex-grow w-full md:w-3/6 relative -z-10">
          <div className="w-8/12 md:w-auto h-full ml-auto md:mx-0 p-8 sm:p-12 aspect-square md:absolute md:top-0 md:-right-[20%] bg-gray-300 rounded-full">
            <div className="w-full h-full aspect-square relative ">
              {/* IMG */}
              <div className="w-full h-full aspect-square absolute bg-cover bg-white rounded-full shadow-2xl z-30" style={{ backgroundImage: `url('${props.img}')`}}></div>

              {/* Arrow */}
              <div className="absolute top-1/2 left-0 -translate-x-3/4 -translate-y-3/4 flex flex-col items-end justify-end z-10">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="h-8 sm:h-12 w-8 sm:w-16 rounded-full bg-gray-300"></div>
                  <div className="h-8 sm:h-12 w-28 sm:w-36 rounded-full bg-gray-300"></div>
                </div>
                <div className="h-8 sm:h-12 w-28 sm:w-36 mr-12 sm:mr-16 bg-white rounded-full"></div>
                <div className="h-8 sm:h-12 w-36 sm:w-44 bg-gray-300 rounded-full"></div>
              </div>
            </div>           

          </div>
        </div>
      </div>
    </div>
  )
}