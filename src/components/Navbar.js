import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = ({ toggleNav, toggleNavbar, Twitter, Instagram, Logo, Discord }) => {
  return (
    <nav className="bg-white p-4 md:p-6 shadow-md sticky top-0 z-30">
      <div className="container mx-auto max-w-6xl flex items-center justify-between flex-wrap px-5">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="cursor-pointer" onClick={() => scroll.scrollToTop()}><img alt="" src={Logo} className="w-14 sm:w-16" /></span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-500" onClick={toggleNavbar}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={
              (toggleNav ? "scale-y-100 transition delay-300 duration-300 ease-in block" : "hidden") + " w-full lg:flex-grow lg:flex lg:items-center lg:w-auto lg:text-right"}>
          <div className="text-sm lg:flex-grow lg:space-x-10 font-semibold text-center">
            <Link
              activeClass="text-[#298ded]"
              to="about"
              className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >About</Link>
        
            <Link
              activeClass="text-[#298ded]"
              to="features"
              className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Features</Link>

            <Link
              activeClass="text-[#298ded]"
              to="roadmap"
              className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Roadmap</Link>

            <Link
              activeClass="text-[#298ded]"
              to="team"
              className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Team</Link>

            <Link
              activeClass="text-[#298ded]"
              to="faqs"
              className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >FAQs</Link>
          </div>
          <div className="lg:space-x-10 items-center">
              <a href="https://twitter.com/JukeBoysNFTs" target="_blank" rel="noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
                <img alt="" src={Twitter} className="w-10 mx-auto lg:mx-0" />
              </a>
              <a href="https://instagram.com/jukeboysnfts/" target="_blank" rel="noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
                <img alt="" src={Instagram} className="w-8 mx-auto lg:mx-0" />
              </a>
              <a href="https://discord.gg/4s6MDWkx" target="_blank" rel="noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110 lg:relative lg:top-1">
                <img alt="" src={Discord} className="w-11 mx-auto lg:mx-0" />
              </a>
            </div>
        </div>
      </div>
    </nav>
  )
}