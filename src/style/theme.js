import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none !important',
      },
    },
  },
});

export default theme;
