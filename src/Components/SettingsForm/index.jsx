import { useContext, useState } from "react";
import { SettingsContext } from "../Context/Settings";
import { createStyles, Switch } from "@mantine/core";
import { IconSettings } from '@tabler/icons-react';

const SettingsForm = (event) => {
  
  const { pageItems, setPageItems, showCompleted, setShowCompleted, sort, setSort, saveLocalStorage  } = useContext(SettingsContext);
  const [showUpdate, setShowUpdate] = useState(false);
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

//!! grabbed from demo code with modifications, add onSubmit to form 
const handleSubmit = (e) => {
  e.preventDefault();
  setShowUpdate(true);
  saveLocalStorage();
  // e.target.reset(); // wtf is this doing?
};

return (
    <>
      <h2 className={classes.userSettingsHeader}><IconSettings/> Manage Settings </h2>

      <form onChange={handleSubmit}>
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
    
      {showUpdate &&
      <section>
        <h3>Settings Updated</h3>
        <p> Show Completed: {showCompleted ? 'yes' : 'no'}</p>
        <p> Items Per Page: {pageItems}</p>
        <p> Sort Keyword: {sort}</p>
      </section>
      }
    
    </>
  )
};

export default SettingsForm;