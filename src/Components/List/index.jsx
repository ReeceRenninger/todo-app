import { SettingsContext } from '../../Context/Settings';
import { useContext, useState } from 'react';
import { Badge, Card, Group, Pagination, Text, CloseButton, createStyles } from '@mantine/core';
import { Else, If, Then } from "react-if";
import Auth from '../Auth';
import { AuthContext } from '../../Context/Auth';

const styles = createStyles((theme) => ({
  tasks: {
    width: '70%',
    margin: 'auto',
  }
}))

function List({ list, toggleComplete, deleteItem }) {

  const { classes } = styles();
  const { pageItems, showCompleted } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoggedIn, can } = useContext(AuthContext);

  const displayItems = showCompleted
    ? list
    : list.filter((items) => !items.complete);

  const pages = Math.ceil(displayItems.length / pageItems);
  const firstItem = (currentPage - 1) * pageItems;
  const lastItem = currentPage * pageItems;
  const finalItems = displayItems.slice(firstItem, lastItem);

  return (
    <>



      {finalItems.map(item => (

        <Card className={classes.tasks} key={item.id} shadow='sm' padding='md' margin='md' withBorder>
          <Card.Section>
            <Group position='apart'>
              <If condition={isLoggedIn && can('update')}>
                <Then>
                  <Badge
                    onClick={() => toggleComplete(item.id)}
                    color={item.complete ? 'green' : 'red'}
                  >
                    {item.complete ? 'Completed' : 'Pending'}
                  </Badge>
                </Then>
                <Else>
                  <Badge
                    color={item.complete ? 'green' : 'red'}
                  >
                    {item.complete ? 'Completed' : 'Pending'}
                  </Badge>
                </Else>
              </If>
              <Auth capability='delete' >
              </Auth>
              <Text>{item.text}</Text>
              <Text><small>Assigned to: {item.assignee}</small></Text>
              <Text><small>Difficulty: {item.difficulty}</small></Text>
             
                <CloseButton aria-label="Close modal" title="Close popover" size="xl" iconSize={20}
                  onClick={() => deleteItem(item.id)} />
            
            </Group>
          </Card.Section>

        </Card>
      ))}
      <Group position='center'>

        <Pagination
          total={pages}
          value={currentPage}
          onChange={(value) => setCurrentPage(value)}
        />
      </Group>
    </>
  )
}

export default List;