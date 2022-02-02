export const PreFooter = ({ modalData, openModal }) => {

  return (
      <div className="bg-[#272424]">
        <div className="container max-w-5xl mx-auto text-white p-10">
          {
            modalData.map((data) => {
              return (
                <div className="mb-10" key={data.id}>
                  <h3 className="mb-5">{data.title}</h3>
                  <p className="mb-3">{data.content.substring(0,100) + "..."}</p>
                  <button onClick={() => openModal(data.id)} className="underline text-red-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Read More</button>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}