import { createMuiTheme } from '@material-ui/core';
import { colorPalette } from './colorPalette';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // containedPrimary: {
      //   backgroundColor: colorPalette.button.primary,
      // },
    },
  },
});

export default theme;
