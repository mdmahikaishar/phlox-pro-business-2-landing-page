import { Button } from "../ui";

export default function Contact() {
  return (
    <section className="">
      <div className="holder flex flex-col lg:flex-row items-center gap-8">
        <ContactCard name="Start a New Project" des="Are You Ready?">
          <div className="w-full max-w-sm h-12 flex items-center gap-4 bg-gray-800 rounded-full">
            <input className="px-4 text-sm flex-grow bg-transparent outline-none" type="text" placeholder="Enter Your Email Address" />
            <button className="h-12 px-4 font-semibold text-xs uppercase text-white">Submit</button>
          </div>
        </ContactCard>

        <ContactCard variant="primary" name="Let's Talk About Work" des="What Are You Waiting for?">
          <Button text="Start Now" />
        </ContactCard>
      </div>
    </section>
  )
}


interface IContact {
  name: string,
  des: string,
  children: React.ReactNode,
  variant?: "primary" | "secondary",
}

function ContactCard(props: IContact) {
  return (
    <div className={`w-full px-8 py-16 flex flex-col items-center justify-center gap-4 ${props.variant === "primary" ? "bg-green-700": "bg-gray-700"} rounded-3xl`}>
      <p className="text-center font-semibold text-white/50">{props.des}</p>
      <h1 className="mb-8 text-center font-semibold text-4xl text-white">{props.name}</h1>

      <div className="w-full flex items-center justify-center">
        {props.children}
      </div>
    </div>
  )
}