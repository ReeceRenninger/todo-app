import { createStyles, Navbar } from "@mantine/core";
import { Link } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  nav: {
    backgroundColor: theme.colors.blue[6],
    height: '100%',
    margin: 'auto',
    color: 'white',
    display: 'flex',
    padding: '5px',
  }
}));

function HeaderItems(props) {
  
  const { classes } = useStyles();

  return (

      <Navbar className={classes.nav}>
        <Link to='/'>Home</Link>
        <Link to='/settings'>Settings</Link>
      </Navbar>

  );
}

export default HeaderItems;