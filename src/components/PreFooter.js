export const PreFooter = ({ modalData, openModal }) => {

  return (
    <div className="bg-[#272424]">
      <div className="container max-w-5xl mx-auto text-white p-10">
        {
          modalData.map((data) => {
            return (
              <div key={data.id} className="mb-5">
                <h3 className="mb-3 font-bold">{data.title}</h3>
                <p className="mb-2">{data.content.substring(0, 100) + "..."}</p>
                <button onClick={() => openModal(data.id)} className="underline text-red-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Read More</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}