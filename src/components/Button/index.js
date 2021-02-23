import React from 'react';

//UI
import * as styled from './index.style';

const Button = props => {
  return (
    <styled.Button {...props}>
      {props.children}
      {props.endIcon ? <styled.EndIcon>{props.endIcon}</styled.EndIcon> : null}
    </styled.Button>
  );
};

export default Button;
