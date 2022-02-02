export const Team = ({ teamMembers }) => {
  return (
    <div className="py-32 bg-[#FAFAFA]" id="team">
      <h1 className="text-center text-5xl font-semibold pb-16">The Team</h1>
      <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5 md:px-10">
        {
          teamMembers.map((teamMember) => {
            return (
              <div className="p-5 lg:hover:shadow-md text-center lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
                <img alt="" src={teamMember.avatar} className="mx-auto mb-10 w-36" />
                <h3 className="text-xl font-semibold mb-8">{teamMember.name}</h3>
                <p className="leading-relaxed">{teamMember.content}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}