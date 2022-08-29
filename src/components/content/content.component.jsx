import React, { useEffect } from 'react';
import './content.styles.css';

export const Content = ({ heading, headingNext, description }) => {
  return (
    <div className="content">
      <h2 className="heading-2">{heading}</h2>
      <p className="normal-description" data-aos="fade-right">
        {description}
      </p>
      <div className="line">&nbsp;</div>
      <h2 className="heading-2-edited heading-2" data-aos="fade-up">
        {headingNext}
      </h2>
    </div>
  );
};
