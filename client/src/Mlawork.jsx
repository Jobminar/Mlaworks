import React from "react";
import "./ResponsiveComponent.css";
import SanjayData from "./sanjaydata.jpeg";
import voters from "./voter.jpg";
import Sanjayworks from "./sanjayworks.jpeg";
import gangulavid from "./gangulavid.mp4";
import bjpkarya from "./bjpkarya.mp4";
import sanjayvid from "./sanjayvid";
import roadshowvid from "./roadshowvid.mp4";
const ResponsiveComponent = () => (
  <div className="responsive-container">
    <div className="video-container">
      <iframe
        title="Video"
        width="100%"
        height="100%"
        src={sanjayvid}
        allowFullScreen
        style={{ border: "none" }} // Use inline style to remove border
      ></iframe>
    </div>
    <div className="video-container">
      <iframe
        title="Video"
        width="100%"
        height="100%"
        src={gangulavid}
        allowFullScreen
        style={{ border: "none" }} // Use inline style to remove border
      ></iframe>
    </div>
    <div className="video-container">
      <iframe
        title="Video"
        width="100%"
        height="100%"
        src={bjpkarya}
        allowFullScreen
        style={{ border: "none" }} // Use inline style to remove border
      ></iframe>
    </div>
    <div className="video-container">
      <iframe
        title="Video"
        width="100%"
        height="100%"
        src={roadshowvid}
        allowFullScreen
        style={{ border: "none" }} // Use inline style to remove border
      ></iframe>
    </div>
    <div className="image-container">
      <img src={Sanjayworks} alt="Image 2" className="responsive-image" />
    </div>
    <div className="image-container">
      <img src={SanjayData} alt="Image 1" className="responsive-image" />
    </div>
    <div className="image-container">
      <img src={voters} alt="Image 2" className="responsive-image" />
    </div>
  </div>
);

export default ResponsiveComponent;
