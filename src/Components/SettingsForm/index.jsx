import { useContext } from "react";
import { SettingsContext } from "../Context/Settings";
import { createStyles, Switch } from "@mantine/core";
import { IconSettings } from '@tabler/icons-react';

const SettingsForm = (event) => {
  
  const { pageItems, setPageItems, showCompleted, setShowCompleted, sort, setSort } = useContext(SettingsContext);

const useStyles = createStyles((theme) => ({
  nav: {
    backgroundColor: theme.colors.gray,
    height: '100%',
    margin: 'auto',
    color: 'white',
    display: 'flex',
    padding: '5px',
  }
}));

const { classes } = useStyles();

return (

    <>
    
      <h1 className={classes.nav}><IconSettings/> Manage Settings </h1>
      <form>
        <h3>Update Settings</h3>
        <label >
          <Switch label="Show Completed ToDos" type="checkbox" name="completed" checked={showCompleted} onChange={(event) => setShowCompleted(event.target.checked)} />
        </label>
        <label>
          <span>Items Per Page</span>
          <input type="number" name="pageItems" placeholder={pageItems} onChange={(event) => setPageItems(event.target.value)} />
        </label>
        <label>
          <span>Sort Keyword</span>
          <input type="text" name="sort" placeholder={sort} onChange={(event) => setSort(event.target.value)} />
        </label>
      </form>
    </>
  )
};

export default SettingsForm;