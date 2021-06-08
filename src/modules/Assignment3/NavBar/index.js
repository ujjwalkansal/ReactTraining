import React from "react";
import xcoinslogo from "../../../utils/images/xcoinslogo.svg";
import "./index.css";

function NavBar() {
  return (
    <div className={"nav_bar"}>
      <div className={"logo_container"}>
        <a href="https://www.xcoins.com">
          <img src={xcoinslogo} alt={"logo"} />
        </a>
      </div>

      <nav>
        <div className={"topic_text"}>
          <span>{"TOPICS"}</span>
        </div>
        <li>
          <button className={"nav_bar_btn clicked"}>{"Buy Currency"}</button>
        </li>
        <li>
          <button className={"nav_bar_btn "}>{"Verification"}</button>
        </li>
        <li>
          <button className={"nav_bar_btn "}>{"Orders"}</button>
        </li>
        <li>
          <button className={"nav_bar_btn "}>{"Wallet"}</button>
        </li>
        <li>
          <button className={"nav_bar_btn "}>{"Payment methods"}</button>
        </li>
        <li>
          <button className={"nav_bar_btn "}>{"Other"}</button>
        </li>
      </nav>
      <li>
        <button className={"nav_bar_btn "}>{"Security"}</button>
      </li>
      <li>
        <button className={"nav_bar_btn "}>{"Referral programme"}</button>
      </li>
    </div>
  );
}

export default NavBar;
