import React from 'react';

function Shipping() {
  return (
    <article className="grid lg:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <div className="duration-700 transition-all opacity-100 transform translate-y-0">
          <h3 className="text-primary-600 xl:text-xl lg:text-lg text-base font-semibold">
            We reach all destinations
          </h3>
          <h4> Enjoy the free shipping</h4>
        </div>
        <p className="lg:text-lg">
          Packly offers a free and worldwide shipping within the European Union
          with unrivalled speed and efficiency. We entrust packaging to the
          top-tier express couriers and air freight services, ensuring flawless
          deliveries worldwide. From Milan to New York, London to Paris and
          Berlin, our reach extends worldwide. Enjoy fast shipping within 24
          hours throughout Italy and 3 to 5 working days in Europe, the US, and
          Canada. At Packly, your satisfaction is our priority. We make every
          effort to ensure that your parcels reach you with the utmost speed and
          care.
        </p>
        <div className="mt-auto">
          <a href="/select-box/en/dieline-boxes">
            <button className="btn btn-filled w-full md:w-fit">
              Order now
            </button>
          </a>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden"></div>
    </article>
  );
}

export default Shipping;
