import React, { useEffect, useState } from "react";
// import React from "react";
import instagramLogo from "../assets/instagram.png";
import moreIcon from "../assets/more.png";
import twitterLogo from "../assets/twitter.png";
import "./Main.css";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">Cyber Punk</div>
          <span className="itemNumber">.#3</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={
                "https://lh3.googleusercontent.com/hJKQWDj6ZUlEnBsdxH-_gK7sAosVTJjBLP_UE4TD-wVBFATfXgRJheHy1CGwp8Ly3Gz3yNvW7H9fJOjbyYt6qsmDzcld6ObliXouJz8=w301"
              }
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x3143jrks464ube84yr8ehfdij4ff4dfsgf</div>
              <div className="ownerHandle">@MikeCode</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
