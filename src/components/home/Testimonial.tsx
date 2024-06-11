export default function Testimonial() {
  return (
    <section className="">
      <div className="w-full min-h-screen p-4 md:p-8 text-center flex flex-col items-center justify-center bg-cover gap-8 text-white" style={{ background: `url('/vite.svg'), linear-gradient(to bottom left, rgba(17, 17, 17, .90), rgba(82, 82, 82, .95))`}}>
        <div className="mx-auto font-bold text-4xl text-green-700">,,</div>
        <p className="max-w-[70ch] sm:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit odio dignissimos fugit distinctio deleniti fugiat repellat, accusantium non quo quidem quam voluptatem cum eveniet pariatur vero, ipsum ipsam iste facere obcaecati dolore! Placeat perspiciatis autem veniam at odio nam eligendi!</p>
        <div className="mx-auto font-bold text-4xl text-green-700">,,</div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-20 aspect-square bg-white bg-cover rounded-full overflow-hidden" style={{backgroundImage: `url('/vite.svg')`}}></div>
          <h1 className="text-xl uppercase text-green-700">Lissa Durbin</h1>
          <p className="font-semibold text-sm">Client</p>
        </div>
      </div>
    </section>
  )
}