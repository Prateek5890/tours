import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, deleteTours }) => {
  const [isFullInfo, setIsFullInfo] = useState(false);

  return (
    <article className="single-tour">
      <p className="tour-price">$ {price}</p>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>

        <p>
          {isFullInfo ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setIsFullInfo(!isFullInfo)}
          >
            {isFullInfo ? "show less" : "read more"}
          </button>
        </p>

        <div>
          <button
            className="btn btn-block delete-btn"
            onClick={() => deleteTours(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </article>
  );
};

export default Tour;
