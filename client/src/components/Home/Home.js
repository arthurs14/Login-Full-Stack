import { Container, Typography, Button, Paper } from '@material-ui/core';
import { useUser } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import makeStyles from './styles';

const Home = () => {
  const { logout } = useUser();
  const history = useHistory();
  const classes = makeStyles();

  const handleLogout = () => {
    console.log('logging out');
    logout(history);
  };

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.home} variant="h6">Homepage</Typography>
        <Button 
          className={classes.logout} 
          variant="outlined" 
          color="secondary"
          onClick={handleLogout}>Logout</Button>
      </Paper>
    </Container>
  );
};

export default Home;