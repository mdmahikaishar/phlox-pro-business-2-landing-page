import { IService, SERVICES } from "../../constances";
import { Button, Line } from "../ui";

export default function Services() {
  return (
    <section className="py-20">
      <div className="holder text-center lg:text-right flex flex-col lg:flex-row items-center lg:items-stretch gap-4 md:gap-8">
        {/* Left */}
        <div className="lg:w-2/6 flex flex-col items-center lg:items-start gap-4 md:gap-8">
          <h1 className="max-w-[30ch] text-4xl capitalize">We Are Here To Make Your <span className="text-green-700">Website</span> Look More <span className="text-green-700">Elegant</span> And Stylish!</h1>
          <Line />
          <Button text="View All" variant="primary" />
        </div>

        {/* Right */}
        <div className="lg:w-4/6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
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
    <div className="p-4 md:p-8 rounded-3xl shadow-2xl">
      <props.icon className="mx-auto lg:mx-0 mb-6 text-7xl text-green-700" />
      <h1 className="mb-4 text-2xl">{props.name}</h1>
      <p className="text-sm opacity-70">{props.des}</p>
    </div>
  )
}