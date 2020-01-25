import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.
*/
const ShoppingList = props => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item">{props.items.map((item, index) => <li key={index}>{item}</li>)}</ol>
    </div>
  );
};

ShoppingList.propTypes = {
  items: PropTypes.array.isRequired,
  item: PropTypes.string.isRequired,
};

export default ShoppingList;
