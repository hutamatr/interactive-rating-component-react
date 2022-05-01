import React from "react";

import thankYou from "../../assets/illustration-thank-you.svg";

const MainThanks = (props) => {
  return (
    <section className={`flex-col gap-y-5 py-3 px-2 ${props.className}`}>
      <img src={thankYou} alt="thank-you" className="mx-auto" />

      <p className="mx-auto mb-2 max-w-fit rounded-full bg-dark-gray px-3 py-1.5 text-sm text-new-orange">
        You selected {props.onAddRating} out of 5
      </p>
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h1 className="text-2xl font-bold text-white">Thank You!</h1>
        <p className="text-center text-sm text-new-gray ">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </section>
  );
};

export default MainThanks;
