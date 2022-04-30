import React from "react";

const RatingValue = (props) => {
  const rating = [1, 2, 3, 4, 5];

  const addRatingValueHandler = (e) => {
    props.onMainRating(e.target.value);
  };

  return (
    <ul className="mb-5 flex flex-row justify-around">
      {rating.map((rate) => {
        return (
          <li key={rate}>
            <button
              className="cursor-pointer rounded-full bg-dark-gray px-4 py-2.5 text-sm text-new-gray duration-300 hover:bg-new-orange hover:text-white focus:bg-new-gray focus:text-white active:bg-new-gray"
              onClick={addRatingValueHandler}
              value={rate}
            >
              {rate}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingValue;
