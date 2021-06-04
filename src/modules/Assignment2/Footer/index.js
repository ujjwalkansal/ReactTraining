import React from "react";
import skype from "../images/skype.png";
import msg from "../images/message.png";
import "./index.css";

class Footer extends React.Component {
  render() {
    return (
      <div className={"footer_container"}>
        <p>
          <img src={skype} alt={"skype_logo"} />
          {"eluminous_bde10"} {" | "}
        </p>
        <p>
          <img src={msg} alt={"msg_logo"} />
          {"biz@eluminoustechnologies.com"}
        </p>
      </div>
    );
  }
}

export default Footer;
