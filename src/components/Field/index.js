import React from 'react';

//COMPONENTS
import { Field as FinalFormField } from 'react-final-form';
import Inputs from './Inputs';

const ErrorMode = ({ error }) => {
  return (
    <div>
      <span style={{ fontSize: '0.75rem' }}>{error}</span>
    </div>
  );
};

const FieldAdapter = props => {
  return (
    <>
      <Inputs {...props} error={!!(props.meta.touched && props.meta.error)} />
      {props.meta.touched && props.meta.error ? <ErrorMode error={props.meta.error} /> : null}
    </>
  );
};

const Field = props => {
  if (props.mode === 'error') {
    return <FinalFormField subscription={{ touched: true, error: true }} />;
  }

  return <FinalFormField {...props} component={FieldAdapter} />;
};

export default Field;
