import React from 'react';
import PropTypes from 'prop-types';


function SectionTitle({ title }) {
  return (
    <>
      <h2>{title}</h2>
     
    </>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default SectionTitle;
