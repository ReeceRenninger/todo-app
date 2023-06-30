import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import List from '../List';
import Auth from '../Auth';


import { Grid, TextInput, Button, Text, createStyles, Slider, Card } from '@mantine/core';



const styles = createStyles((theme) => ({
  todo: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '16px auto',
    padding: '16px',
    width: '80%',
  }
}));


const Todo = () => {
  const { classes } = styles(); // this needs to be in the function

  const [defaultValues] = useState({
    difficulty: 3,
  });
  const [list, setList] = useState([]); //TODO: maybe modify this to just get the list from the server?
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  useEffect(() => {
    //TODO: initial get request for the todos will go here possibly?
  }, []);
  
  //!! Discovered grids can hold multiple grid columns around specific components
  return (
    <>
      <h1 data-testid="header-h1" className={classes.todo}>To Do List: {incomplete} items pending</h1>

      <Grid>
        <Auth capability="create">
          <Grid.Col xs={12} sm={4}>
            <Card shadow="sm" padding="md" margin="md" withBorder>
              <form onSubmit={handleSubmit}>

                <h2>Add To Do Item</h2>

                <TextInput
                  onChange={handleChange}
                  name="text"
                  type="text"
                  placeholder="Item Details"
                />

                <TextInput
                  onChange={handleChange}
                  name="assignee"
                  type="text"
                  placeholder="Assignee Name"
                />

                <Text>Difficulty Rating</Text>
                <Slider
                  onChange={handleChange}
                  defaultValue={defaultValues.difficulty}
                  min={1}
                  max={5}
                  name="difficulty"
                />

                <Button radius="md" type="submit">Add Item</Button>
              </form>
            </Card>
          </Grid.Col>
        </Auth>
        <Grid.Col xs={12} sm={8}>
          {/* <Card shadow="sm" padding="md" margin="md"> */}
          <List
            deleteItem={deleteItem} //trying to remove the error and place function here for now
            list={list}
            toggleComplete={toggleComplete} />
          {/* </Card> */}
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Todo;
