import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  home: {
    margin: theme.spacing(3),
  },
  logout: {
    margin: theme.spacing(2),
  },
}));