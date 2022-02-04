export const Faqs = ({ faqs }) => {
  return (
    <div className="py-36" id="faqs">
      <div className="container mx-auto max-w-5xl space-y-8 px-10">
        <h1 className="text-5xl font-semibold mb-16">FAQs</h1>

        {
          faqs.map((faq) => {
            return (
              <div className={`block sm:flex gap-6 px-6 md:px-8 md:pr-32 py-8 ${faq.bgColor} lg:hover:transition lg:hover:delay-150 lg:hover:duration-300 lg:hover:ease-in-out lg:hover:scale-110`} id="faqs">
                <img alt="" src={faq.icon} className="h-16 sm:h-10 animate-spin mx-auto mb-3 sm:mb-0 sm:mx-0" />

                <div className="pt-1 font-semibold text-gray-800">
                  <h4 className="text-xl lg:text-2xl mb-8">{faq.title}</h4>
                  
                  <div>
                    <p className="lg:text-lg">{faq.content}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}