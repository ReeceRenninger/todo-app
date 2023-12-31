import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import List from '.';
import LoginProvider from '../../Context/Auth';
import SettingsProvider from '../../Context/Settings';


describe('List testing', () => {
  let item = {
    id: 1,
    text: 'test',
    assignee: 'test',
    difficulty: 1,
    complete: false,

  };
  test('renders a list', () => {
    render(
      <LoginProvider>
        <SettingsProvider>
          <List list={[item]} />
        </SettingsProvider>
      </LoginProvider>
    )

    let assignee = screen.getByTestId('item-assignee-test');
    let difficulty = screen.getByTestId('item-difficulty-test');
    let text = screen.getByTestId('item-text-test');

    expect(assignee).toHaveTextContent('Assigned to: test');
    expect(difficulty).toHaveTextContent('Difficulty: 1');
    expect(text).toHaveTextContent('test');
  });
});