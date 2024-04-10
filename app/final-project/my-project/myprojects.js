import React from 'react';

export default function MyProjects({ title, imageSrc, githubLink, liveDemoLink }) {
  return (
    <div>
      <div>
        <img src={imageSrc} alt={title} />
      </div>
      <h2>{title}</h2>
      <div>
        <button onClick={() => window.open(githubLink)}>
          Github
        </button>
        <button onClick={() => window.open(liveDemoLink)}>
          Live Demo
        </button>
      </div>
    </div>
  );
}
