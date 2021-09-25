import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectCards({ projects }) {
  return (
    <>
      {projects?.map((project) => (
        <ProjectCard {...project} />
      ))}
    </>
  );
}
