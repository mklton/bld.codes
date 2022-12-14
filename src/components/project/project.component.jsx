import React from 'react';
import './project.styles.css';

const Project = ({ pic, link = '#' }) => (
  <a href={link} className="project" data-aos='fade-up'>
    <div className="img-container">
      <img src={pic} alt="project" />
    </div>
  </a>
);

export default Project;
