import React from "react";
import "./index.css";

function QuestionBox(props) {
  return (
    <div className={"question_container"}>
      <div>
        <div className={"question_category_div"}>
          <p className={"question_category"}>{props.question_category}</p>
        </div>
        <div>
          <ul className={"list_items"}>
            {props.questions.map((i) => {
              return <li>{i}</li>;
            })}
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
