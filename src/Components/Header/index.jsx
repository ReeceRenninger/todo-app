import { createStyles, Navbar } from "@mantine/core";
import { Link } from "react-router-dom";


const headerStyle = createStyles((theme) => ({
  nav: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    margin: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '10px',
    // justifyContent: 'space-evenly',
    fontSize: '16px',
    boxSizing: 'border-box',
    padding: theme.spacing.md,
    fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
  }
}));

function Header(props) {
  
  const { classes } = headerStyle();

  return (

      <Navbar className={classes.nav}>
        <Link to='/'>Home</Link>
        <Link to='/settings'>Settings</Link>
      </Navbar>

  );
}

export default Header;