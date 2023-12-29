import React from 'react';
import Text from '../Text';

const Numbers = ({number}) => {
  let newNumber;
  if (number > 999) {
    newNumber = (number / 1000).toFixed(1) + 'k';
  } else {
    newNumber = number;
  }

  return <Text fontWeight='bold'>{newNumber}</Text>;
};

export default Numbers;
