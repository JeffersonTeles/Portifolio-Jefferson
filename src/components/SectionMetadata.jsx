import React from 'react';

const SectionMetadata = ({ text }) => {
  return (
    <div className="container-custom">
      <div className="section-metadata">
        <div className="metadata-line" />
        <span className="metadata-text">{text}</span>
        <div className="metadata-line" />
      </div>
    </div>
  );
};

export default SectionMetadata;
