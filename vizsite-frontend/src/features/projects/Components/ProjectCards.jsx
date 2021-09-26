import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectCards({ projects }) {
  return (
    <>
      {projects?.map((project, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ProjectCard {...project} key={index} />
      ))}
    </>
  );
}
