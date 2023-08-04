import React from 'react'

function SkillBar({ skillText, skillPercentage, classModifier }) {
  return (
    <div className="skills__bar">
      <h2>{skillText}</h2>
      <div className={`skills__bar-progress skills__bar-progress--${classModifier}`} style={{ width: skillPercentage }}>
        <div className="skills__bar-progress-bar"></div>
      </div>
    </div>
  );
}

export default SkillBar;
