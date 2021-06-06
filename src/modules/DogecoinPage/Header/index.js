import React from "react";
// import myimages from "../../../utils/images/images";
import "./index.css";
import logo from "../../../utils/images/xcoinslogo.svg";

function Header() {
  return (
    <div className={"header_container"}>
      <span>
        <img src={logo} alt={"logo"} />
      </span>
      <div className={"vl"}></div>
      <div className={"header_links"}>
        <span>
          <a href="#">{"BUY BITCOIN"}</a>
        </span>
        <span>
          <a href="#">{"SELL BITCOIN"}</a>
        </span>
        <span>
          <a href="#">{"BLOG"}</a>
        </span>
        <span>
          <a href="#">{"ABOUT US"}</a>
        </span>
      </div>
      <div className={"buttons_div"}>
        <button className={"header_btn "}>LOGIN</button>
        <button className={"header_btn dark"}>SIGN UP</button>
      </div>
    </div>
  );
}

export default Header;
