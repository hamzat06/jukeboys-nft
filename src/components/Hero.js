import Jukeboys from "../assets/images/jukeboys.png"
import HeroImg from "../assets/images/hero-image.png"

export const Hero = () => {
  return (
    <div className="max-h-5xl hero bg-fixed bg-cover bg-center bg-no-repeat w-full" id="hero">
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="text-center items-center py-14 md:py-28 px-10 sm:px-0 block md:hidden">
          <img alt="" src={Jukeboys} className="max-w-xs md:max-w-sm mx-auto mb-5 animate-pulse" />
          <h1 className="text-4xl lg:text-5xl font-bold text-white ">
            Music {"&"} Pop <br /> Culture
          </h1>
        </div>
        
        <div className="px-16 sm:px-0 pt-0 md:pt-20">
          <img alt="" src={HeroImg} className="w-96 md:max-w-sm mx-auto" />
        </div>
        <div className="text-center items-center py-20 px-10 sm:px-0 hidden md:block">
          <img alt="" src={Jukeboys} className="max-w-xs md:max-w-sm mx-auto mb-5 animate-pulse" />
          <h1 className="text-4xl lg:text-5xl font-bold text-white ">
            Music {"&"} Pop <br /> Culture
          </h1>
        </div>
      </div>
    </div>
  )
}