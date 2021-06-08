import React from "react";
import "./index.css";
import xcoinslogo from "../../../utils/images/xcoinslogo.svg";
import setting from "../../../utils/images/setting.svg";
import bell from "../../../utils/images/bell.svg";
import profile from "../../../utils/images/profile.jpg";

function Header() {
  return (
    <div className={"header_div"}>
      <div className={"toggle_cover"}>
        <div className="container" onClick={myFunction}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>

      <img src={xcoinslogo} alt={"logo"} className={"xcoin_logo"} />
      <img src={setting} alt={"setting"} className={"setting_btn"} />
      <img src={bell} alt={"bell"} className={"bell_btn"} />
      <img src={profile} alt={"profile"} className={"profile_btn"} />
    </div>
  );
}

function myFunction(x) {
  x.classList.toggle("change");
}

export default Header;
