import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from '.';

describe('Testing ToDo component', ()  => {
  test('render h1 element as expected', () => {
    render(<Todo />);

    let h1 = screen.getByTestId('header-h1');

    expect(h1).toBeTruthy();
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: 0 items pending');
  })
})