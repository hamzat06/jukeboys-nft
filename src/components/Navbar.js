export const Navbar = ({ toggleNav, toggleNavbar, Twitter, Instagram, Logo, Discord }) => {
  return (
    <nav className="bg-white p-6 shadow-md sticky top-0 z-10">
      <div className="container mx-auto max-w-6xl flex items-center justify-between flex-wrap px-5">
        <div className="flex items-center flex-shrink-0 mr-6">
          <a href="/"><img alt="" src={Logo} className="w-16" /></a>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-500" onClick={toggleNavbar}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={
              (toggleNav ? "scale-y-100 transition delay-300 duration-300 ease-in block" : "hidden") + " w-full lg:flex-grow lg:flex lg:items-center lg:w-auto lg:text-right"}>
          <div className="text-sm lg:flex-grow lg:space-x-10 font-semibold text-center">
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
              About
            </a>
            <a href="#features" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
              Features
            </a>
            <a href="#roadmap" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
              Roadmap
            </a>
            <a href="#team" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
              The Team
            </a>
            <a href="#faqs" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
              FAQs
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
              <img alt="" src={Twitter} className="w-8 mx-auto lg:mx-0" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
              <img alt="" src={Instagram} className="w-8 mx-auto lg:mx-0" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-xl lg:hover:rotate-12 lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
              <img alt="" src={Discord} className="w-10 mx-auto lg:mx-0" />
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  )
}