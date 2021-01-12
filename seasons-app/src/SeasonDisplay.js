import React from "react";
import "./seasonDisplay.css";

const seasonConfig = {
  Summer: {
    text: "let's hit the beach",
    iconName: "sun",
  },
  Winter: {
    text: "burr it's Chiily",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

function SeasonDisplay({ latitude, error }) {
  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  if (!latitude && error) {
    return <h1>Error: {error}!</h1>;
  }
  if (latitude && !error) {
    return (
      <div className={`SeasonDisplay ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}!</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
  return <h1>Loading...</h1>;
}

export default SeasonDisplay;
