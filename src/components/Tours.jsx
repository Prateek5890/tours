import React from "react";
import Tour from "./Tour";

const Tours = ({ toursList, deleteTours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <p className="title-underline"></p>
      </div>
      <div className="tours">
        {toursList.length > 0 &&
          toursList.map((toursObj) => {
            return (
              <Tour key={toursObj.id} deleteTours={deleteTours} {...toursObj} />
            );
          })}
      </div>
    </section>
  );
};

export default Tours;
