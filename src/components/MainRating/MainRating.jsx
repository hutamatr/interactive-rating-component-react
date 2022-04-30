import React from "react";
import star from "../../assets/icon-star.svg";

const MainRating = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <div className="mb-4 flex max-w-fit items-center justify-center rounded-full bg-very-dark-blue p-3">
        <img src={star} alt="icon" className="w-4" />
      </div>
      <h1 className="text-2xl font-bold text-white">How did we do?</h1>
      <p className="text-sm font-light text-new-gray">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </section>
  );
};

export default MainRating;
