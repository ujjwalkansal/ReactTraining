import React from "react";
import "./index.css";
import clothing from "../../../utils/images/clothing.svg";
import domain from "../../../utils/images/domain.svg";
import casinos from "../../../utils/images/casinos.svg";

function WhereToSpend() {
  return (
    <div className={"whereToSpend"}>
      <p className={"whereHeading"}>{"Where Can I Spend my Dogecoin?"}</p>
      <span className={"whereContent"}>
        {
          "There are a variety of fashion and clothing shops online accepting Doge as payment. You can also use your Doge to pay for domains and hosting, or online casinos."
        }
      </span>
      <div className={"image_container"}>
        <RoundImage
          image={clothing}
          alt_name={"clothing"}
          image_heading={"CLOTHING STORES"}
        />
        <RoundImage
          image={domain}
          alt_name={"domain"}
          image_heading={"DOMAINS & HOSTING"}
        />
        <RoundImage
          image={casinos}
          alt_name={"casinos"}
          image_heading={"ONLINE CASINOS"}
        />
      </div>
      <div></div>
    </div>
  );
}

function RoundImage(props) {
  return (
    <div className="roundImage">
      <img src={props.image} alt={props.alt_name} className={"image_avatar"} />
      <span className={"image_heading"}>{props.image_heading}</span>
    </div>
  );
}

export default WhereToSpend;
