import React from 'react';

function Customers() {
  const customer = ['/main/customer.svg'];
  const AllCustomers = Array(10).fill(customer).flat();
  return (
    <section>
      <div className="space-y-4">
        <div className="container">
          <p className="text-slate-400 text-center">Happy customers</p>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-infinite-scroll">
            {AllCustomers.map((item, i) => (
              <li key={i}>
                <img
                  alt="pepsi logo"
                  loading="lazy"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  src={item}
                  style={{
                    color: 'transparent',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-infinite-scroll">
            {AllCustomers.map((item, i) => (
              <li key={i}>
                <img
                  alt="pepsi logo"
                  loading="lazy"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  src={item}
                  style={{
                    color: 'transparent',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Customers;
