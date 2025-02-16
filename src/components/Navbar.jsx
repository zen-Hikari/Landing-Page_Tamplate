import { useState } from "react";
import "./Global.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${
              isMenuOpen ? "open " : ""
            }pt-8 relative`}>
      <span className="overlay flex"></span>
      <nav className="flex justify-center">
        <div className="container flex items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold">DIGITAL AGENCY</h1>
          </div>

          {/* Menu */}
          <div
            className={`link-menu xl:flex xl:flex-row flex mr-20 gap-8 ml-auto text-lg text-gray-600 ${
              isMenuOpen ? "open fixed top-20 left-0 right-0 flex flex-col items-center bg-white py-8 shadow-lg" : "hidden"
            }`}
          >
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
          </div>

          {/* Hamburger Button */}
          <button
            className="hamburger space-y-2 ml-auto lg:hidden flex flex-col"
            onClick={toggleMenu}
          >
            <span
              className={`rounded-4xl transition-all transform origin-center bg-black w-8 h-[4px] flex ${
                isMenuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            ></span>
            <span
              className={`rounded-4xl transition-all transform origin-center bg-black w-8 h-[4px] flex ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`rounded-4xl transition-all transform origin-center bg-black w-8 h-[4px] flex ${
                isMenuOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
