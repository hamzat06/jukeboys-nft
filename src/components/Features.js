export const Features = ({ featuresArray }) => {
  return (
    <div className="bg-white pb-0 md:pb-72" id="features">
      <div style={{ backgroundColor: "#E5FAFE" }} class="pt-24 md:pt-32 px-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-20 md:mb-0">Holders Perks</h1>
        <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:translate-y-32 justify-center pb-24 md:pb-0">
          {
            featuresArray.map((feature) => {
              return (
                <div className="bg-white p-8 lg:p-14 rounded-3xl shadow-md text-center lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110">
                  <img alt="" src={feature.thumbnail} className="w-full md:w-auto" />
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8">{feature.title}</h3>
                  <p className="leading-relaxed">{feature.content}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}