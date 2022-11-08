import React from "react";
import banner from "../../../public/images/banner.jpg";

function Banner() {
  return (
    <div>
      <img style={{
        width: "100%",
        height: "240px",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "0px 0px 8px 8px",
      }} src="http://127.0.0.1:3000/images/banner.jpg" />
      
    </div>
  );
}

export default Banner;