import React from "react";
import "./index.css";

class Second_col extends React.Component {
  render() {
    return (
      <div className="container1">
        <div className="upper_head">
          <h1 className="h1tag">Lite</h1>
          <div class="free_div">
            <span class="free_text">{"Free"}</span>
            <span class="grey_text">{"with restrictions"}</span>
          </div>
        </div>
        <hr className="blue_line" />

        <p className="plan_text">{"Plan includes:"}</p>

        <div className="plans_list">
          <div className="plan_item">
            <span class="plans_tick">&#10004;</span>
            <span class="plans_text">
              {"Manage conversations directly from your website."}
            </span>
          </div>

          <div className="plan_item">
            <span class="plans_tick">&#10004;</span>
            <span class="plans_text">{"Bot without the AI service."}</span>
          </div>

          <div className="plan_item">
            <span class="plans_tick">&#10004;</span>
            <span class="plans_text">{"Achieved chat for 30 days."}</span>
          </div>

          <div className="plan_item">
            <span class="plans_tick">&#10004;</span>
            <span class="plans_text">{"Free, for always."}</span>
          </div>
        </div>

        <p className="features_text">{"View all the features"}</p>

        <center>
          <button class="free_pro_plan_btn">
            {"Start 14 days of free Pro plan"}
          </button>
        </center>
      </div>
    );
  }
}

export default Second_col;
