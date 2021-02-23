export const styles = {
  container: styles => ({
    ...styles,
    border: 'none',
  }),
  control: (styles, { isDisabled }) => ({
    ...styles,
    boxShadow: 'none',
    opacity: isDisabled ? '0.5' : '1',
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
