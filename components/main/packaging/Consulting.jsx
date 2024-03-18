import React from 'react';

function Consulting() {
  return (
    <div className="duration-700 transition-all opacity-100 transform translate-y-0 scale-100">
      <div className="bg-primary-900 undefined rounded-xl shadow-soft-48 overflow-hidden">
        <article className="grid xl:grid-cols-2 gap-8">
          <div className="p-6 xl:p-12 xl:pr-0 flex flex-col gap-4">
            <div className="duration-700 transition-all opacity-100 transform translate-y-0">
              <h3 className="text-primary-100 xl:text-xl lg:text-lg text-base font-semibold">
                Packaging experts by your side
              </h3>
              <h4 className="text-primary-400">
                Professional consulting and assistance
              </h4>
            </div>
            <p className="text-primary-100 lg:text-lg">
              Tap into our professional consulting and support services to
              unlock the ultimate custom packaging solution for your product.
              Our team of seasoned packaging professionals is here to assist
              you. They are available at your fingertips through real-time chat
              or our dedicated hotline. Don&apos;t settle for ordinary custom
              boxes when you can have extraordinary results with our guidance.
              Let us elevate your packaging game to new heights and create an
              unforgettable customer experience.
            </p>
            <div className="mt-auto">
              <button className="btn btn-tonal w-full md:w-fit">
                Chat with us
              </button>
            </div>
          </div>
          {/* <video
            playsinline=""
            autoplay=""
            loop=""
            className="w-full h-full object-cover xl:order-2"
          >
            <source
              src="/index/consulting/customer-support.mp4"
              type="video/mp4"
            />
            <source
              src="/index/consulting/customer-support.webm"
              type="video/webm"
            />
            <track
              src="/"
              kind="captions"
              srclang="en"
              label="english_captions"
            />
          </video> */}
        </article>
      </div>
    </div>
  );
}

export default Consulting;
