import { Button, Line } from "../ui";

export default function Missions() {
  return (
    <section className="py-20 relative">
      <div className="holder flex flex-col lg:flex-row">
        {/* Left */}
        <div className="lg:w-3/6 aspect-square">
          <div className="w-10/12 lg:w-2/6 aspect-square absolute -left-8 bg-green-700 rounded-3xl">
            <div className="w-full h-full aspect-video absolute left-20 top-12 lg:top-8 bg-blue-300 rounded-3xl shadow-2xl"></div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-3/6 text-center lg:text-left flex flex-col items-center lg:items-start gap-8">
          <h1 className="text-4xl">About our <span className="text-gray-700">missions</span></h1>
          <Line />
          <p className="max-w-[65ch] text-sm opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis sequi nihil possimus quidem iste cupiditate voluptates vero cumque numquam laborum eveniet, perferendis repellat inventore, dignissimos eaque aspernatur? Aspernatur iure officiis fugit quo ad totam vitae! Cum sed accusamus illum, voluptates odio tempore nesciunt, quos quis vero quaerat quas porro?</p>
          <Button text="Read More" />
        </div>
      </div>
    </section>
  )
}