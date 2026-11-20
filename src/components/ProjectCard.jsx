import React from 'react';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
}

export default ProjectCard;