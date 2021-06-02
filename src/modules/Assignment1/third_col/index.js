import React from "react";
import "./index.css";

class Second_col extends React.Component {
  render() {
    return (
      <div className="container2">
        <div className="upper_head">
          <h1 className="h1tag_third">Pro</h1>
          <div class="free_div_third">
            <span class="free_text_third">29$</span>
            <span class="grey_text_third">{"monthly"}</span>
          </div>
        </div>
        <hr className="blue_line_third" />

        <p className="plan_text_third">{"All of lite plus:"}</p>

        <div className="plans_list_third">
          <div className="plan_item_third">
            <span class="plans_tick_third">&#10004;</span>
            <span class="plans_text_third">
              {
                "Bot with AI that can recognize the user's behaviour and can automatize the sentences."
              }
            </span>
          </div>

          <div className="plan_item_third">
            <span class="plans_tick_third">&#10004;</span>
            <span class="plans_text_third">
              {"Unlimited conversational flows."}
            </span>
          </div>

          <div className="plan_item_third">
            <span class="plans_tick_third">&#10004;</span>
            <span class="plans_text_third">
              {"Facebook, Twitter, Instagram and Linkedin integration."}
            </span>
          </div>

          <div className="plan_item_third">
            <span class="plans_tick_third">&#10004;</span>
            <span class="plans_text_third">
              {"Achieved chat without limits."}
            </span>
          </div>
        </div>

        <p className="features_text_third">{"View all the features"}</p>

        <center>
          <button class="free_pro_plan_btn_third">
            {"Start 14 days of free Pro plan"}
          </button>
        </center>
      </div>
    );
  }
}

export default Second_col;
