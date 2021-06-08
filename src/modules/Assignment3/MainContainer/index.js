import React from "react";
import Header from "../Header";
import SearchSection from "../SearchSection";
import QuestionBox from "../QuestionBox";
import NavBar from "../NavBar";
import "./index.css";

function MainContainer() {
  return (
    <div className={"main_div"}>
      <div className={"nav_bar_section"}>
        <NavBar />
      </div>
      <div className={"other_than_nav"}>
        <div className={"header_in_main"}>
          <Header />
        </div>
        <SearchSection />
        <div className={"question_boxes_container"}>
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
