import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty-state">No projects match your search.</p>;
  }

  return (
    <section className="project-grid" aria-label="Projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;