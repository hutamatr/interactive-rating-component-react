import React, { useState } from "react";

const RatingValue = () => {
  const [addRating, setAddRating] = useState(null);

  const rating = [1, 2, 3, 4, 5];

  const addRatingHandler = () => {};

  return (
    <ul className="flex flex-row justify-around">
      {rating.map((rate) => {
        return (
          <li
            key={rate}
            className="cursor-pointer rounded-full bg-very-dark-blue px-4 py-2.5 text-sm text-new-gray"
            onClick={addRatingHandler}
          >
            <span>{rate}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingValue;
