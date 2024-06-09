import { BiX, BiSearch, } from "react-icons/bi";
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container holder">
                <div className="header-left">
                    <a className="header-logo" href="/">
                        <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cropped-Group-39@2x.png" alt="logo" />
                    </a>
                </div>
                <div className="header-center">
                    {/* Header Toggler */}
                    <input className="header-toggler" type="checkbox" id="header-toggler" />
                    <label className="header-toggler-label" htmlFor="header-toggler">
                        <span className=""></span>
                        <span className=""></span>
                        <span className=""></span>
                    </label>

                    {/* Nav */}
                    <nav className="nav">
                        <label className="nav-close" htmlFor="header-toggler">
                            <BiX className="nav-close-icon" />
                        </label>

                        <a className="nav-item" href="/">Home</a>
                        <a className="nav-item" href="/">About</a>
                        <a className="nav-item" href="/">Services</a>
                        <a className="nav-item" href="/">Showcase</a>
                        <a className="nav-item" href="/">Blog</a>
                        <a className="nav-item" href="/">Contact</a>
                    </nav>
                </div>
                <div className="header-right">
                    <button className="header-purchase">
                        <span className="">Purchase</span>
                    </button>
                    <button className="header-btn">
                        <BiSearch className="header-search-icon" />
                    </button>
                </div>
            </div>
        </header>
    )
}