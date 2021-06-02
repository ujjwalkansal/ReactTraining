import React from "react";
import First_col from "/home/appinventiv/Desktop/React JS Projects/training/src/modules/Assignment1/first_col";
import Second_col from "/home/appinventiv/Desktop/React JS Projects/training/src/modules/Assignment1/second_col";
import Third_col from "/home/appinventiv/Desktop/React JS Projects/training/src/modules/Assignment1/third_col";
import "./index.css";

class MainContainer extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="first_flex">
          <First_col />
        </div>
        <div className="second_flex">
          <div class="upper_flex">
            <span class="start_now_text">
              {"Start now"}
              <br />
              {"your "}
              <b> {"free plan"}</b>
            </span>

            <div class="right_text">
              <p className="corporate_text">{"Are you a corporate?"}</p>
              <br />
              <p className="corporate_text purple_text">{"Contact us"}</p>
            </div>
          </div>
          <div className={"third_flex"}>
            <Second_col />
            <Third_col />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
