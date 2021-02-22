export const styles = {
  container: styles => ({
    ...styles,
    border: 'none',
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    boxShadow: 'none',
    '&:hover': {
      border: 'none',
    },
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? '#CACACA' : '#FFF',
    color: '#000',
    '&:hover': {
      backgroundColor: isSelected ? '#FFF' : '#CACACA',
    },
  }),
};
