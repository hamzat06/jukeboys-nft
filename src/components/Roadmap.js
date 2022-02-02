import { RoadmapCard } from "../componentImports";
import {
  BlueArrow,
  GreenArrow,
  OrangeArrow
} from "../imageImports";

export const Roadmap = ({roadmapData}) => {
  return (
    <div className="bg-[#272424] text-white">
      <div className="container max-w-4xl mx-auto py-32 px-10">
        <h1 className="text-5xl font-semibold text-center mb-32">Road Map</h1>
        <div className="mb-32 space-y-10 lg:space-y-0">
          <div className="block lg:flex">
            <RoadmapCard data={roadmapData[0]} words={true} maxWidth={"mx-auto lg:mr-auto"} rotate={"lg:rotate-[-5deg]"} />
            <img alt="" src={OrangeArrow} className="w-64 lg:h-36 lg:mt-36 lg:mr-36 hidden lg:block" />
          </div>
          <div className="block lg:flex lg:mt-5">
            <img alt="" src={BlueArrow} className="w-64 md:h-36 md:mt-36 md:ml-36 hidden lg:block" />
            <RoadmapCard data={roadmapData[1]} words={true} maxWidth={"mx-auto lg:ml-auto lg:mt-[-150px]"} rotate={"lg:rotate-[7deg]"} />
          </div>
          <div className="lg:mt-5 flex">
            <RoadmapCard data={roadmapData[2]} words={true} maxWidth={"mx-auto md:mr-auto"} rotate={"lg:rotate-[-2deg]"} />
            <img alt="" src={GreenArrow} className="w-64 lg:h-36 lg:mt-36 lg:mr-36 hidden lg:block" />
          </div>
          <div className="block lg:flex lg:mt-5">
            <img alt="" src={BlueArrow} className="w-64 md:h-36 md:mt-36 md:ml-36 hidden lg:block lg:invisible mr-24" />
            <RoadmapCard data={roadmapData[3]} maxWidth={"w-48 text-center mx-auto lg:mr-auto"} hClass={"text-5xl"} pClass={"text-9xl"} rotate={"lg:rotate-[3deg]"} />
          </div>

        </div>
        <p className="mb-10 leading-loose">Jukeboys roadmap information does not constitute investment advice, financial advice, trading advice, or any other type of advice, and you should not treat any of its content as such. Before making any investment decisions, conduct your due diligence and consult your financial advisor.</p>
        <p>Jukeboys roadmap is subject to change</p>
      </div>
    </div>
  )
}