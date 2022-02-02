export const Community = ({ Twitter, Instagram }) => {
  return (
    <div className="px-10 py-20">
      <div className="container mx-auto p-8 sm:p-20 text-white max-w-xl community bg-cover bg-center bg-no-repeat rounded-3xl">
        <h3 className="text-center text-3xl sm:text-4xl font-semibold mb-10 sm:mb-16">Join Our  <br /> Community</h3>

        <h5 className="text-center text-xl font-semibold mb-16 sm:mb-20">
          Keep Notifications On For More Updates And Exiting Perks
        </h5>

        <div className="flex justify-center gap-16 sm:gap-20">
          <a href="twitter.com" target="_blank"><img alt="" src={Twitter} className="h-14 md:h-20 animate-bounce hover:animate-none" /></a>
          <a href="instagram.com" target="_blank"><img alt="" src={Instagram} className="h-14 md:h-20 animate-bounce hover:animate-none" /></a>
        </div>
      </div>
    </div>
  )
}