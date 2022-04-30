import React from "react";

import Card from "./components/UI/Card";
import MainRating from "./components/MainRating/MainRating";
import RatingValue from "./components/MainRating/RatingValue";
import Button from "./components/UI/Button";

function App() {
  return (
    <main>
      <Card className="flex translate-y-1/2 flex-col gap-y-5">
        <MainRating />
        <RatingValue />
        <Button>SUBMIT</Button>
      </Card>
    </main>
  );
}

export default App;
