export const Modal = ({ modalOpen, closeModal, data, nextModalData, previousModal }) => {
  return (
    <>
      {
        modalOpen ? (
          <>
            <div className="fixed grid w-screen h-screen place-items-center z-50 backdrop-blur-sm bg-black/30">
              <div className="container max-w-2xl min-h-4xl bg-[#272424] text-white p-6 md:p-10">
                <div className="flex justify-between mb-5 lg:mb-8">
                  <h3 className="text-xl text-center font-semibold md:text-2xl">{data.title}</h3>
                  <button className="p-0 text-3xl text-white text-red-500 w-8 h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={closeModal}>&times;</button>
                </div>
          
                <p className="font-semibold lg:text-lg">{data.content}</p>
                <div className="flex justify-between">
                  {
                    data.id > 1 ? (
                      <button onClick={() => previousModal(data.id)} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[#208bfb] py-2 px-4 mt-5">{"<"} Previous</button>
                    ): (
                      <button onClick={closeModal} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-red-500 py-2 px-4 mt-5">Close</button>
                    )
                  }
                  {
                    data.id < 3 ? (
                      <button onClick={() => nextModalData(data.id)} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[#208bfb] py-2 px-4 mt-5">Next {">"}</button>
                    ): (
                      <button onClick={closeModal} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-red-500 py-2 px-4 mt-5">Close</button>
                    )
                  }
                </div>
              </div> 
            </div>
          </>
        ):(
          <>
          </>
        )
      }
    </>
  )
}