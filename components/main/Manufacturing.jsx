import React from 'react';

function Manufacturing() {
  return (
    <section className="container my-12 lg:my-24">
      <div className="duration-700 transition-all opacity-100 transform translate-y-0 scale-100">
        <div className="bg-white p-6 lg:p-12 rounded-xl shadow-soft-48 overflow-hidden">
          <article className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="duration-700 transition-all opacity-100 transform translate-y-0">
                <h3 className="text-primary-600 xl:text-xl lg:text-lg text-base font-semibold">
                  In-house manufacturing
                </h3>
                <h4>Made in Italy and certified packaging</h4>
              </div>
              <p className="lg:text-lg">
                We are a unique combination of a software and manufacturing
                company. We have the capability to produce in-house packaging,
                using advanced techniques and equipment. We were born in Italy,
                but we have global ambitions. Our dedication to excellence can
                be seen in our pursuit of best manufacturing practices. We are a
                BRCGS-certified packaging company with an AA grade. Over 100,000
                companies rely on Packly, not only for its user-friendly
                platform. It guarantees customized and tailor-made boxes that
                meet the highest international standards.
              </p>
              <div className="flex gap-4 justify-between sm:justify-start">
                <figure className="bg-slate-100 p-2 rounded-xs flex items-center"></figure>
                <figure className="bg-slate-100 p-2 rounded-xs flex items-center"></figure>
                <figure className="bg-slate-100 p-2 rounded-xs flex items-center"></figure>
              </div>
              <div className="mt-auto">
                <a href="/select-box/en/dieline-boxes">
                  <button className="btn btn-filled w-full md:w-fit">
                    Get your certified packaging
                  </button>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Manufacturing;
