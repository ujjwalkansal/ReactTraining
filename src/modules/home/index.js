import React from "react";
import "./index.css";
class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <h1 className="h1tag">{"Hello from Home component"}</h1>
        <h2 className="h2tag">{"Howdy Appinventiv??"}</h2>
      </div>
    );
  }
}

export default Home;
