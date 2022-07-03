import { TwitterB } from "../imageImports";

export const Team = ({ teamMembers }) => {
  return (
    <div className="py-32 bg-[#FAFAFA]" id="team">
      <h2 className="text-center text-5xl font-semibold pb-16">The Team</h2>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-10 justify-around">
        {teamMembers.map((teamMember) => {
          return (
            <a
              href={teamMember.twitter_link}
              className="p-5 lg:hover:shadow-md text-center lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110"
            >
              <img
                alt=""
                src={teamMember.avatar}
                className="mx-auto mb-8 w-36"
              />
              <h3 className="text-xl font-semibold mb-3">{teamMember.name}</h3>
              <img alt="" src={TwitterB} className="w-8 mx-auto" />
              <p className="leading-relaxed mt-3">{teamMember.content}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};
