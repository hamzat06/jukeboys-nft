export const Loader = ({ Logo }) => {
  return (
    <div className="w-screen h-screen bg-white fixed z-50 grid place-content-center">
      <img alt="logo" src={Logo} className="animate-pulse md:w-32" />
    </div>
  )
}