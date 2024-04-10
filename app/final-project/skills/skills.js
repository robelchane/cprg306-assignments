import React from 'react';

const Skill = ({ name, level }) => {
  return (
    <article>
      <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
      <div>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
};

export default Skill;
