import React, { useState } from 'react';

function Case() {
  const [src, setSrc] = useState(0);
  const history = ['/main/history.jpg'];
  const AllHistories = Array(5).fill(history).flat();

  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container px-4 flex flex-col gap-8">
        <div className="duration-700 transition-all opacity-100 transform translate-y-0">
          <h3 className="text-primary-600 xl:text-xl lg:text-lg text-base font-semibold text-center">
            Our customers are people like you
          </h3>
          <h2 className="xl:text-4xl lg:text-3xl text-2xl text-center">
            Case history
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="col-span-3 lg:col-span-1 min-h-[144px]">
            <h4 className="text-xl text-slate-500">
              Lisa Iannello - This unique
            </h4>
            <p className="lg:text-lg">
              The thing we liked the most is that you can work with everything
              and everyone on the interface. Being a startup, we often need
              small quantities of packaging and in a short amount of time.
              Packly offers this possibility: it&lsquo;s perfect for this!
            </p>
          </div>
          <div className="w-full h-[480px] lg:h-[640px] xl:h-[720px] col-span-3 lg:col-span-2 flex flex-wrap gap-3 md:gap-4">
            {AllHistories.map((item, i) => (
              <article
                key={i}
                onClick={() => setSrc(i)}
                className={`"relative left-0 h-full overflow-hidden bg-white transition-all ease-in-out duration-500 cursor-pointer ${
                  src === i ? 'flex-1' : 'flex-[0.20] hover:flex-[0.25]'
                }  rounded-xl  hover:shadow-soft-48`}
              >
                <img
                  alt="Our customer"
                  title="Preview"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  sizes="100vw"
                  src={item}
                  style={{
                    //   position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    objectFit: 'cover',
                    color: 'transparent',
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Case;
