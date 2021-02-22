import { makeStyles } from '@material-ui/core/styles';
import { colorPalette } from './style/colorPalette';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: colorPalette.background,
    color: colorPalette.text,
    minHeight: '100vh',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
