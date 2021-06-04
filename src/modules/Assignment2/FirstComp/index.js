import React from "react";
import head_img from "../images/first.jpg";
import "./index.css";

class FirstComp extends React.Component {
  render() {
    return (
      <div className="main_card">
        <img src={head_img} alt={"header_img"} className={"react_img"} />
        <p className="blue_text1">
          {"9 React"}
          <br />
          {"Developers Tools"}
        </p>

        <p className="white_text">
          {"to Create Better"}
          <br />
          {"Apps Faster"}
        </p>
      </div>
    );
  }
}

export default FirstComp;
