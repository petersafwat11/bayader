import React from 'react';

function Quality() {
  return (
    <article className="grid xl:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4 xl:order-2">
        <div className="duration-700 transition-all opacity-100 transform translate-y-0">
          <h3 className="text-primary-600 xl:text-xl lg:text-lg text-base font-semibold">
            Enchance your product
          </h3>
          <h2 className="xl:text-4xl lg:text-3xl text-2xl">
            High quality custom packaging
          </h2>
        </div>
        <p className="lg:text-lg">
          Details make the difference: the key to extraordinary packaging
          designs are in the meticulous attention we pay to every step. Thanks
          to Packly, boxes come to life for the best unboxing experience. How?
          Through a millimetric precision and perfect adherence to your item.
          All achieved from a custom layout.This ensures accuracy according to
          the selected material, style and proportions of your product. To
          deliver superior results, we use raw materials that meet high
          standards of quality and performance. These materials are carefully
          selected for their durability and capacity. Your product will travel
          in boxes that provide complete protection and showcase a unique style.
          You can choose premium material or special finishes. But also custom
          cutouts to add value and personality to the design of custom
          packaging.
        </p>
        <div className="mt-auto">
          <a href="/select-box/en/dieline-boxes">
            <button className="btn btn-filled w-full md:w-fit">
              Create your packaging
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Quality;
