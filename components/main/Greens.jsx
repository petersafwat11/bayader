import React from 'react';

function Greens() {
  return (
    <section>
      <div className="py-24 lg:py-48 bg-primary-400 bg-cover bg-no-repeat bg-center relative animate-slow-move">
        <article className="container px-4 flex flex-col gap-8">
          <div className="duration-700 transition-all opacity-100 transform translate-y-0">
            <h3 className="text-primary-100 xl:text-xl lg:text-lg text-base font-semibold">
              Naturally eco-friendly custom boxes
            </h3>
            <h4 className="text-white">
              100% green products and green company
            </h4>
          </div>
          <p className="text-white lg:text-lg">
            We embrace a sustainable philosophy. This can be seen in both the
            products we manufacture and our company as a whole. As an ISO 14001
            certified company, we are committed to preserving the environment
            and adopting eco-friendly practices. When producing custom
            packaging, we utilise energy from 100% renewable sources and strive
            daily to contribute to CO2 reduction. We exclusively use responsibly
            managed pure cellulose paper, which allows us to obtain FSC™
            certified packaging. We care about the lifecycle of our products,
            and, as a result, the custom boxes made by us are recyclable.
          </p>
          <div className="mt-auto">
            <a href="/select-box/en/dieline-boxes">
              <button className="btn btn-filled w-full md:w-fit">
                Get your green packaging
              </button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Greens;
