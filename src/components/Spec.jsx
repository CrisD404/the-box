import "tw-elements";

const Spec = (props) => {
  const { specs, cgScreen } = props;
  return (
    <>
      <div className="mt-[4.25rem] mb-10 -ml-8">
        <h1 className="text-[2rem] font-bold md:hidden">Tech Specs</h1>
        <div className="hidden md:flex items-center text-left px-8 top-0 w-full relative">
            <h1 className="mr-5 font-bold text-[1.75rem] text-gray-400">What's in the box</h1>
            <h1 className="font-bold text-[1.75rem]">Tech Specs</h1>
            <img className="absolute right-0 z-10 cursor-pointer -scale-x-100" src="./assets/switch/arrow-double.svg" onClick={() => cgScreen()} alt="arrow-icon" />
        </div>
      </div>
      <div className="accordion mb-[3.75rem] mx-auto flex flex-col md:space-x-8 lg:space-x-10 md:flex-row">
        {!!specs &&
          specs.map((spect, indx) => {
            const { title, icon, speclist } = spect;
            return (
              <dl className="w-full mx-auto max-w-md accordion-item bg-white border border-gray-200">
                <dt className="relative">
                  <h2 className="accordion-header mb-0 text-base">
                    <button
                      className="
                        -md:accordion-button
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border
                        border-b-0
                        rounded-none
                        transition
                        focus:outline-none"
                      type="button"
                      data-bs-toggle='collapse'
                      data-bs-target={`#collapse${indx}`}
                      aria-expanded="true"
                      aria-controls={`collapse${indx}`}
                    >
                      {title}
                    </button>
                  </h2>
                  <img className="absolute top-4 right-14 md:right-3 z-10" src={icon} alt="icon"></img>
                </dt>
                {speclist.map((desc) => {
                  return (
                    <div className="accordion-item bg-white border border-gray-200">
                      <div
                        id={`collapse${indx}`}
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body py-4 px-5">
                          <dd className="text-xs text-left">{desc}</dd>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </dl>
            );
          })}
      </div>
    </>
  );
};

export default Spec;
