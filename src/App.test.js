import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const component = await render(<App />);

  expect(component).toMatchSnapshot();
});
