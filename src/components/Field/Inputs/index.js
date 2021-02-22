import React from 'react';

//COMPONENTS
import Select from '../../Select';
import { TextField } from '@material-ui/core';

const Inputs = props => {
  switch (props.mode) {
    case 'select':
      return <Select {...props} error={!!props.error} />;
    default:
      <TextField {...props} />;
      break;
  }
};

export default Inputs;
