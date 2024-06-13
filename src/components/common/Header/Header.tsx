import { BiX, BiSearch, } from "react-icons/bi";
import "./Header.scss";

export default function Header() {
    return (
        <header className="header bg-white text-black shadow-2xl">
            <div className="holder h-[6.5rem] sm:h-[10rem] md:h-[6.5rem] py-6 md:py-0 grid grid-cols-[1fr,1fr] grid-rows-[auto] sm:grid-cols-[1fr] sm:grid-rows-[1fr,1fr] md:grid-cols-[1fr,3fr,1fr] md:grid-rows-[auto] items-center gap-2 lg:gap-4">
                <div className="flex items-center justify-start sm:justify-center md:justify-start">
                    <a className="max-w-[10rem] sm:max-w-[12rem] object-contain" href="/">
                        <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cropped-Group-39@2x.png" alt="logo" />
                    </a>
                </div>
                <div className="relative flex items-center justify-end sm:justify-center gap-2 lg:gap-4">
                    {/* Header Toggler */}
                    <input className="header-toggler hidden" type="checkbox" id="header-toggler" />
                    <label className="header-toggler-label w-[2.5rem] h-[2.5rem] relative block sm:hidden cursor-pointer transition-all duration-200 hover:opacity-50" htmlFor="header-toggler">
                        <span className="h-[.2rem] w-[1.75rem] absolute left-1/2 top-1/2 bg-black transition-all duration-200"></span>
                        <span className="h-[.2rem] w-[1.75rem] absolute left-1/2 top-1/2 bg-black transition-all duration-200"></span>
                        <span className="h-[.2rem] w-[1.75rem] absolute left-1/2 top-1/2 bg-black transition-all duration-200"></span>
                    </label>

                    {/* Nav */}
                    <nav className="nav">
                        <label className="nav-close" htmlFor="header-toggler">
                            <BiX className="nav-close-icon" />
                        </label>

                        <a className="p-2 block text-sm uppercase text-black/50 hover:opacity-50" href="/">Home</a>
                        <a className="p-2 block text-sm uppercase text-black/50 hover:opacity-50" href="/">About</a>
                        <a className="p-2 block text-sm uppercase text-black/50 hover:opacity-50" href="/">Services</a>
                        <a className="p-2 block text-sm uppercase text-black/50 hover:opacity-50" href="/">Showcase</a>
                        <a className="p-2 block text-sm uppercase text-black/50 hover:opacity-50" href="/">Blog</a>
                        <a className="p-2 block text-sm uppercase text-black/50 hover:opacity-50" href="/">Contact</a>
                    </nav>
                </div>
                <div className="hidden md:flex items-center justify-end gap-2 lg:gap-4">
                    <button className="header-purchase">
                        <span className="">Purchase</span>
                    </button>
                    <button className="w-12 h-12 grid place-items-center text-xl border-none bg-transparent cursor-pointer">
                        <BiSearch className="text-green-500" />
                    </button>
                </div>
            </div>
        </header>
    )
}