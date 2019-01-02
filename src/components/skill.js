import React from "react";

function Skill({ skillName, percentage }) {
  let styles = {
    width: percentage  + "%",
    
  };
  
  return (
    <div className="skill-container">
      <p>{skillName}</p>

      <div className="skill-bar">
        <div className="skill" style={styles}>
          <p>{percentage + " %"}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
