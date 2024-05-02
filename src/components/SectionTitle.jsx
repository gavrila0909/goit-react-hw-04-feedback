import React from 'react';
import PropTypes from 'prop-types';


function SectionTitle({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default SectionTitle;
