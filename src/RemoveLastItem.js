import React from 'react';
import PropTypes from 'prop-types';

const RemoveLastItem = props => {
  const handleDeleteLastItem = event => {
    props.onRemoveLastItem();
  };

  return (
    <button onClick={handleDeleteLastItem} disabled={props.buttonDisabled}>
      Delete Last Item
    </button>
  );
};

RemoveLastItem.propTypes = {
  buttonDisabled: PropTypes.func.isRequired,
  onRemoveLastItem: PropTypes.func.isRequired,
};

export default RemoveLastItem;