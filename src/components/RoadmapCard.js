export const RoadmapCard = ({data, hClass, pClass, maxWidth, words, rotate}) => {
  return (
    <div className={`px-10 py-12 max-w-sm ${maxWidth} font-semibold rounded-[35px] ${data?.bgColor} ${rotate}`}>
      <h3 className={`text-xl mb-2 ${hClass}`}>{data?.title}</h3>
      <ul className="text-xl space-y-2">
        {
          data?.contents?.map((content) => {
            return(
              <p className={`${pClass}`}><b>{words && '>'}</b> {content}</p>
            )
          })
        }
      </ul>
    </div>
  )
}