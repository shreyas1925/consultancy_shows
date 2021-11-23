import React from "react";
import one from "../assets/images/one.jpg";

const Advertisement = () => {
  return (
    <div
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <img
        src={one}
        alt=""
        srcset=""
        className="img-fluid"
        style={{ width: "1300px", height: "280px" }}
      />
    </div>
  );
};

export default Advertisement;
