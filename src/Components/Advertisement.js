import React from "react";
import one from "../assets/images/one.jpg";

const Advertisement = () => {
  return (
    <div>
      <img
        src={one}
        alt=""
        srcset=""
        className="img-fluid"
        style={{ width: "1300px", height: "220px" }}
      />
    </div>
  );
};

export default Advertisement;
