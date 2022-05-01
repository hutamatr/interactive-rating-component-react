import React, { useState } from "react";

import Card from "./components/UI/Card";
import MainRating from "./components/MainRating/MainRating";
import MainThanks from "./components/MainRating/MainThanks";

function App() {
  const [newRate, setNewRate] = useState("");
  const [isRated, setIsRated] = useState(false);

  const ratingValueHandler = (value) => {
    setNewRate(value);
    setIsRated(true);
  };
  return (
    <main>
      <Card className="translate-y-1/3">
        <MainRating
          onAddValue={ratingValueHandler}
          className={`${isRated ? "hidden" : "flex"}`}
        />
        <MainThanks
          onAddRating={newRate}
          className={`${!isRated ? "hidden" : "flex"}`}
        />
      </Card>
    </main>
  );
}

export default App;
