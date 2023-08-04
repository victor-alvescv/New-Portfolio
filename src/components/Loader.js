import React, { useEffect, useState } from "react";

const sleep = ms => new Promise(r => setTimeout(r, ms));

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(false);

  async function load() {
    await sleep(3000);
    setIsLoaded(true);
    await sleep(1000);
    setFadeOutLoader(true);
    document.body.classList.remove("overflow__body");
    await sleep(1500);
    setRemoveLoader(true);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div
      id="preload"
      className={`${fadeOutLoader ? "fade-out__loader" : ""} ${
        removeLoader ? "remove__loader" : ""
      }`}
    >
      <div className={`rocket ${isLoaded ? "rocket__launch" : ""}`}>
        <div className="rocket__body">
          <div className="body"></div>
          <div className="rocket__body--fin rocket__body--fin-left"></div>
          <div className="rocket__body--fin rocket__body--fin-right"></div>
          <div className="rocket__body--window "></div>
        </div>
        <div className="rocket__exhaust--flame"></div>
        <ul className="rocket__exhause--fumes">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="rocket__star">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Loader;
