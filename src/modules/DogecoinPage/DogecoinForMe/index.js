import React from "react";
import "./index.css";
import doge_for_me from "../../../utils/images/doge_for_me.svg";
import SignupBox from "../SignUpBox";

function DogecoinForMe() {
  return (
    <div className={"for_me_container"}>
      <img src={doge_for_me} className={"women_img"} />
      <div className={"for_me_text_container"}>
        <span className={"for_me_heading"}>{"Is Dogecoin For Me?"}</span>
        <span className={"for_me_text"}>
          {
            "Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment. "
          }
        </span>
        <div className={"signup_box_container_div"}>
          <SignupBox />
        </div>
      </div>
    </div>
  );
}

export default DogecoinForMe;
