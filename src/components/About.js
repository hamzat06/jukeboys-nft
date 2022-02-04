import AboutImg from "../assets/images/featured.png"
import { Circle } from "../imageImports";

export const About = () => {
  return (
    <div className="px-10 md:px-20 py-20 md:py-36" id="about">
      <img alt="" src={Circle} className="hidden lg:absolute lg:right-[-500px] lg:mt-[-200px] lg:h-[60rem] lg:block z-0 circle" />
      <div className="container mx-auto max-w-5xl border-solid border-2 border-gray-400 shadow-sm px-4 sm:px-8 md:px-14 py-16 md:py-20 bg-white z-10 relative">
        <div className="block md:flex md:justify-between z-10">
          <div className="mb-20 md:mb-0 pr-0 md:pr-10">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-10">About <br /> Jukeboys</h1>
            <h6 className="max-w-lg text-lg md:text-xl font-semibold text-gray-500 mb-10">Jukeboys is a collection of 4,800 Cool 3D art, representing Music and Pop culture feel.</h6>
            <h6 className="max-w-lg text-xl font-semibold text-gray-500 mb-10">The jukeboys Nfts will give holders unique character identity to represent them in the future metaverse by attending virtual concerts and events.</h6>
            <h6 className="max-w-lg text-xl font-semibold text-gray-500">
              All characters are unique with their legendaries. 😉
            </h6>
          </div>
          
          <div>
            <img alt="" src={AboutImg} className="max-w-[15rem] sm:max-w-[18rem] animate-bounce mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </div>
  )
}