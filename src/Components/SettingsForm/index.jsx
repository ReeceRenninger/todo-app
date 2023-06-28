import { useContext } from "react";
import { SettingsContext } from "../Context/Settings";

const SettingsForm = (event) => {
  const { pageItems, setPageItems, completed, setCompleted, sort, setSort } = useContext(SettingsContext);

  return (
    <>
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