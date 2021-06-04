import React from "react";
import "./index.css";
import FirstComp from "../FirstComp";
import ReusableCard from "../../../Components/ReusableCard";
import icon1 from "../images/developericon.png";
import icon2 from "../images/appIcon.svg";
import icon3 from "../images/storybookIcon.png";
import icon4 from "../images/guidelistIcon.png";
import icon5 from "../images/cli.png";
import icon6 from "../images/bootstrap.png";
import Footer from "../Footer";

class MainContainer extends React.Component {
  render() {
    return (
      <div className={"full_container"}>
        <div className={"middle_container"}>
          <FirstComp />
          <ReusableCard
            img_name={icon1}
            theme={"light"}
            heading={"1) React Developer Tools"}
            inf={
              "Official chrome extension for React from Facebook that lets you examine the list of components and subcomponents on the webpage"
            }
          />
          <ReusableCard
            img_name={icon2}
            theme={"dark"}
            heading={"2) Create React App"}
            inf={"Tool used in the process of setting up a React IDE."}
          />

          <ReusableCard
            img_name={icon3}
            theme={"light"}
            heading={"3) Storybook"}
            inf={"Online app that lets you create UI components."}
          />
          <ReusableCard
            img_name={icon4}
            theme={"dark"}
            heading={"4) React Styleguidist"}
            inf={"It offers an interactive way of creating and sharing UI."}
          />

          <ReusableCard
            img_name={icon5}
            theme={"light"}
            heading={"5) Bit"}
            inf={
              "CLI tool and online platform that enables you to publish React components."
            }
          />
          <ReusableCard
            img_name={icon6}
            theme={"dark"}
            heading={"6) React Bootstrap"}
            inf={
              "Powerful toolkit that compromises HTML, CSS, and Javascript tools to help you create webpages and applications."
            }
          />

          <ReusableCard
            img_name={icon1}
            theme={"light"}
            heading={"7) React Site"}
            inf={
              "Chrome extension for a visual illustration of all components of your app in a live tree structure."
            }
          />
          <ReusableCard
            img_name={icon2}
            theme={"dark"}
            heading={"8) Why did you render"}
            inf={
              "It alerts you in the console when an avoidable render occurs."
            }
          />

          <ReusableCard
            img_name={icon3}
            theme={"light"}
            heading={"9) React Proto"}
            inf={
              "Lets you drag and drop the components your way to create a UI instead of coding."
            }
          />

          <Footer />
        </div>
      </div>
    );
  }
}

export default MainContainer;
