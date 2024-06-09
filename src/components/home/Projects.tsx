import { IProject, PROJECTS } from "../../constances";
import { Line } from "../ui";

export default function Projects() {
  return (
    <section className="">
      {/* Top */}
      <div className="mb-8 holder flex flex-col lg:flex-row lg:items-end gap-8">
        {/* Left */}
        <div className="lg:w-2/6 flex flex-col gap-8">
          <Line />
          <h1 className="text-5xl">Our recent <span className="text-green-700">web designs</span> & some examples of past <span className="text-green-700">projects</span></h1>
          <Line />
        </div>
        {/* Right */}
        <div className="lg:w-4/6 flex flex-col lg:items-end lg:justify-end gap-4 lg:gap-8">
          <p className="max-w-[60ch] text-sm opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit iure consequuntur maxime porro, quis debitis dolorem facilis excepturi accusantium fugiat saepe. In atque, maxime, nam minima architecto sequi ratione aspernatur ad sapiente quas quae veritatis neque alias a ipsa cum sunt beatae fugiat obcaecati reprehenderit! Deleniti, dolorum itaque!</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {PROJECTS.map((item, index) => <ProjectCard {...item} key={index} />)}
      </div>
    </section>
  )
}

function ProjectCard(props: IProject) {
  return (
    <div className="w-full aspect-square rounded-lg overflow-hidden bg-red-500">
      {/* <img className="w-full h-full object-cover" src={props.img} /> */}
    </div>
  )
}