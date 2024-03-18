import React from 'react';

function Print() {
  return (
    <article className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-lg overflow-hidden lg:order-2"></div>
      <div className="flex flex-col gap-4">
        <div className="duration-700 transition-all opacity-100 transform translate-y-0">
          <h3 className="text-primary-600 xl:text-xl lg:text-lg text-base font-semibold">
            No minimum order
          </h3>
          <h4> 1 or 100.000 pieces in 48h</h4>
        </div>{' '}
        <p className="lg:text-lg">
          From 1 to 100,000 pieces, there is no minimum order requirement for
          your custom packaging. For both small and large runs, Packly is the
          right and strategic choice. This flexibility enables anyone to order
          high-quality tailor-made packaging without hassle. They will be
          printed in just 48 hours, regardless of quantities. You can choose
          between 2, 5, or 8 working days for the production of your packaging.
          In your personal area, you can manage orders and use the one-click
          reorder functionality. Reducing time to market and lowering supply
          chain costs is strategic for businesses. Packly helps source product
          folding cartons and corrugated boxes. You can take advantage of
          opportunities to scale in the market as Packly allows you to optimize
          the supply chain and implement just-in-time inventory management,
          avoiding both excess inventory and shortages.
        </p>
        <div className="mt-auto">
          <a href="/select-box/en/dieline-boxes">
            <button className="btn btn-filled w-full md:w-fit">
              Print now
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Print;
