import React, { useState } from "react";
import star from "../../assets/icon-star.svg";
import RatingValue from "./RatingValue";
import Button from "../UI/Button";

const MainRating = (props) => {
  const [addRating, setAddRating] = useState("");

  const addRatingToMainRatingHandler = (rating) => {
    setAddRating(rating);
  };

  const buttonSubmitHandler = () => {
    props.onAddValue(addRating);
  };

  return (
    <section className={`flex-col gap-y-4 ${props.className}`}>
      <div className="mb-3 flex max-w-fit items-center justify-center rounded-full bg-dark-gray p-3">
        <img src={star} alt="icon" className="w-4" />
      </div>
      <h1 className="text-2xl font-bold text-white">How did we do?</h1>
      <p className="mb-3 text-sm font-light text-new-gray">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingValue onMainRating={addRatingToMainRatingHandler} />
      <Button
        className="text-sm uppercase duration-300 hover:bg-white hover:font-semibold hover:text-new-orange"
        onClick={buttonSubmitHandler}
        type="button"
      >
        Submit
      </Button>
    </section>
  );
};

export default MainRating;
