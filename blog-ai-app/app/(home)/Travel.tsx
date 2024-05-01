import React from "react";

type Props = {};

const Travel = (props: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          TRAVEL
        </h4>
        <p className="font-bold text-2xl">New Travel Experience</p>
      </div>
    </section>
  );
};

export default Travel;
