import React from "react";
import "./index.css";

function SearchSection() {
  return (
    <div className="search_support_div">
      <div className={"support_div"}>
        <p className={"support_text"}>Support</p>
        <button className={"back_to_xcoins_btn"}>{"BACK TO XCOINS"}</button>
      </div>
      <input
        type="text"
        placeholder="Search Xcoins support"
        className="search_box"
      />
    </div>
  );
}
export default SearchSection;
