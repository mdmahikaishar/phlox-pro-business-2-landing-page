import { Button } from "../ui";

export default function Contact() {
  return (
    <section className="">
      <div className="holder flex flex-col lg:flex-row items-center gap-4 sm:gap-8">
        <ContactCard name="Start a New Project" des="Are You Ready?">
          <div className="px-6 w-full max-w-sm h-12 flex items-center gap-4 bg-black/50 rounded-full">
            <input className="text-sm w-full bg-transparent outline-none text-white" type="text" placeholder="Enter Your Email Address" />
            <button className="flex-none h-12 font-semibold text-xs uppercase text-white/70">Submit</button>
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
    <div className={`w-full px-8 py-16 flex flex-col items-center justify-center ${props.variant === "primary" ? `gradient-green my-shadow-green`: `gradient-black my-shadow-black `}} bg-cover gap-2 sm:gap-4 rounded-3xl`}>
      <p className="text-center font-semibold text-sm sm:text-base text-white/50">{props.des}</p>
      <h1 className="mb-4 sm:mb-8 text-center font-semibold text-2xl sm:text-4xl text-white">{props.name}</h1>

      <div className="w-full flex items-center justify-center">
        {props.children}
      </div>
    </div>
  )
}