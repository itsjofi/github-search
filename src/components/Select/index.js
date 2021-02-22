import React from 'react';

//COMPONENTS
import Select from 'react-select';

//UI
import { styles } from './index.style';

const CustomSelect = props => {
  const options = [
    { value: 'Javascript', label: 'Javascript' },
    { value: 'Go', label: 'Go' },
  ];

  return (
    <div style={{ width: '100%' }}>
      <Select
        {...props}
        isSearchable={true}
        placeholder='Selecione as linguagens'
        options={options}
        isMulti={true}
        styles={{ ...styles }}
      />
    </div>
  );
};

export default CustomSelect;
