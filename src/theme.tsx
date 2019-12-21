import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import blueGray from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue['500'],
    },
    secondary: {
      main: blueGray['300'],
    },
    error: {
      main: red['500'],
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
