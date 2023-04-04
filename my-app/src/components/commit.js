/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Commit = () => {
  return (
    <div className="flex flex-col md:flex-row mt-4 mb-4 lg:pl-32 lg:pr-32">
      <div className="basis-1/2">
        <div className="grid grid-cols-2 grid-rows-2 grid-flow-row justify-center p-10">
          <div className="mb-4">
            <h1 className="font-semibold mb-2 text-4xl">245%</h1>
            <p className="text-slate-500 text-sm max-w-xs">
              More revenues for the brand
            </p>
          </div>
          <div className="ml-6 mb-4 sm:ml-0">
            <h1 className="font-semibold mb-2 text-4xl">130K+</h1>
            <p className="text-slate-500 text-sm max-w-xs">
              Audiences reached across platfrom
            </p>
          </div>
          <div>
            <h1 className="font-semibold mb-2 text-4xl">50+</h1>
            <p className="text-slate-500 text-sm max-w-xs">
              brands work with us
            </p>
          </div>
          <div className="ml-6 sm:ml-0">
            <h1 className="font-semibold mb-2 text-4xl">24+</h1>
            <p className="text-slate-500 text-sm max-w-xs">
              Use this section to describe your{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="basis-1/2 pl-10 pr-10 sm:p-10">
        <h1 className="font-semibold text-2xl mb-2 md:text-3xl">
          Our Commitments
        </h1>
        <p className="text-slate-500 mb-2">
          Use this section to describe your company and the products you offer.
          You could share your company’s story and details about why you are in
          business. Use this section to describe your company and the products
          you offer. You could share your company’s story and details about why
          you are in business.{" "}
        </p>
        <a href="#" className="text-[#3461FF] font-medium">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Commit;
