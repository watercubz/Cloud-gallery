export default function FaqComponent() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-custom" id="FAQ">
        <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
            <p className="sm:text-4xl text-3xl font-Poppins text-base-content">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="basis-1/2">
            <li className="group">
              <button
                className="relative  flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content">
                  What is MTAAI-core?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4  ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="block group-hover:opacity-0 origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                style={{ transition: 'max-height 0.3s ease-in-out 0s' }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {' '}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda cum amet blanditiis quis vero saepe quo veritatis
                    ab dicta ratione cumque, labore velit omnis sequi voluptatem
                    harum distinctio reiciendis eveniet!
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content">
                  How do I get started?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="group-hover:opacity-0 transform origin-center rotate-90 transition-all duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                style={{ transition: 'max-height 0.3s ease-in-out 0s' }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {' '}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda cum amet blanditiis quis vero saepe quo veritatis
                    ab dicta ratione cumque, labore velit omnis sequi voluptatem
                    harum distinctio reiciendis eveniet!
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  When can I cancel my subscription?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                style={{ transition: 'max-height 0.3s ease-in-out 0s' }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {' '}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda cum amet blanditiis quis vero saepe quo veritatis
                    ab dicta ratione cumque, labore velit omnis sequi voluptatem
                    harum distinctio reiciendis eveniet!
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content">
                  How to get in touch with us?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                style={{ transition: 'max-height 0.3s ease-in-out 0s' }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {' '}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda cum amet blanditiis quis vero saepe quo veritatis
                    ab dicta ratione cumque, labore velit omnis sequi voluptatem
                    harum distinctio reiciendis eveniet!
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
