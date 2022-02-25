import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src="../assets/2.jpg" alt="" />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">Bandana Punk</div>
          <span className="itemNumber">.#3</span>
        </div>
        <div className="ownerDetails"></div>
      </div>
    </div>
  );
};

export default Main;
