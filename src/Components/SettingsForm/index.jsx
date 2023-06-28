import { useContext } from "react";
import { SettingsContext } from "../Context/Settings";
import { createStyles, Switch } from "@mantine/core";
import { IconSettings } from '@tabler/icons-react';

const SettingsForm = (event) => {
  
  const { pageItems, setPageItems, showCompleted, setShowCompleted, sort, setSort } = useContext(SettingsContext);

const styles = createStyles((theme) => ({
  userSettingsHeader: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '16px auto',
    padding: '16px',
    width: '80%',
  }
}));

const { classes } = styles();

return (

    <>
    
      <h2 className={classes.userSettingsHeader}><IconSettings/> Manage Settings </h2>
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