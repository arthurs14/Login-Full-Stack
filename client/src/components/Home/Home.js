import { Container, Typography, Button, Paper } from '@material-ui/core';
import makeStyles from './styles';

const Home = () => {
  const classes = makeStyles();

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.home} variant="h6">Homepage</Typography>
        <Button className={classes.logout} variant="outlined" color="secondary">Logout</Button>
      </Paper>
    </Container>
  );
};

export default Home;