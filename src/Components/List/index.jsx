import { Pagination } from '@mantine/core';
import { SettingsContext } from '../Context/Settings';
import { useContext } from 'react';



function List(props) {

  const { display, completed, difficulty } = useContext(SettingsContext);



  return (
    <>
      {props.list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

      <Pagination
        total={display}
      />

    </>
  )
}

export default List;