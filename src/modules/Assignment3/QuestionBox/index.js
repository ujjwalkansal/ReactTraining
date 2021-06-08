import React from "react";
import "./index.css";

function QuestionBox() {
  return (
    <div className={"question_container"}>
      <div>
        <div className={"question_category_div"}>
          <p className={"question_category"}>{"Buy currency"}</p>
        </div>
        <div>
          <ul className={"list_items"}>
            <li>{"What is my wallet address?"}</li>
            <li>{"What is my wallet address?"}</li>
            <li>{"What is my wallet address?"}</li>
            <li>{"What is my wallet address?"}</li>
            <li>{"What is my wallet address?"}</li>
          </ul>
        </div>
      </div>
      <div>
        <span className={"see_all"}>{"See all articles"}</span>
      </div>
    </div>
  );
}

export default QuestionBox;
