import { useContext } from "react";
import { SettingsContext } from "../Context/Settings";

import { createStyles, Header, Navbar } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  nav: {
    backgroundColor: theme.colors.blue[6],
    height: '100%',
    margin: 'auto',
    color: 'white',
    display: 'flex',
    paddingBottom: '15px',
  }
}));

const SettingsForm = (event) => {
  const { classes } = useStyles();
  const { pageItems, setPageItems, completed, setCompleted, sort, setSort } = useContext(SettingsContext);

  return (
    <>
       <Header >
      <Navbar className={classes.nav}>
        <Link to='/'>Home</Link>
        <Link to='/settings'>Settings</Link>
      </Navbar>
    </Header>
    <h1> Manage Settings </h1>
      <form>
        <label>
          <span>Show Completed ToDos</span>
          <input type="checkbox" name="completed" checked={completed} onChange={(event) => setCompleted(event.target.value)} />
        </label>
        <label>
          <span>Items Per Page</span>
          <input type="number" name="pageItems" value={pageItems} onChange={(event) => setPageItems(event.target.value)} />
        </label>
        <label>
          <span>Sort Keyword</span>
          <input type="text" name="sort" value={sort} onChange={(event) => setSort(event.target.value)} />
        </label>
      </form>
    </>
  )
};

export default SettingsForm;