import React from 'react';

function Preview() {
  return (
    <div className="container">
      <div className="duration-700 transition-all opacity-100 transform translate-y-0 scale-100">
        <div className="bg-white p-6 lg:p-12 rounded-xl shadow-soft-48 overflow-hidden">
          <div className="w-full flex justify-center mb-6 lg:mb-12">
            <span className="text-slate-800 px-1 font-extrabold xl:text-5xl lg:text-4xl text-3xl bg-gradient-to-r from-[#2571ff]/80 via-[#00bfff]/80 to-[#00FFFF]/80 bg-[length:100%_10px] bg-no-repeat bg-bottom">
              Preview.
            </span>
          </div>
          <article className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden"></div>
            <div className="flex flex-col gap-4">
              <div className="duration-700 transition-all opacity-100 transform translate-y-0">
                <h3 className="text-primary-600 xl:text-xl lg:text-lg text-base font-semibold">
                  Interactive experience with virtual mockup
                </h3>
                <h4>Online 3D packaging prototyping</h4>
              </div>
              <p className="lg:text-lg">
                Simplify the approval process and minimise errors in the
                packaging design process. Download the tailor-made die-cut
                template and import it into a vector graphics design software.
                Add your artwork, then upload the file to Packly and preview the
                customized 3D boxes in seconds. Experience the power of the
                interactive model. It allows you to view special finishes and
                every detail, from multiple angles. Rotate it, zoom in, and
                evaluate the realistic appearance, just as you would with the
                printed cardboard boxes. Simplify and speed up the design
                approval process by easily sharing the box preview with
                colleagues or customers, via a simple link.
              </p>
              <div className="mt-auto">
                <a href="/select-box/en/dieline-boxes">
                  <button className="btn btn-filled w-full md:w-fit">
                    Preview now
                  </button>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Preview;
