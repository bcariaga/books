import { cleanup, fireEvent, render } from '@testing-library/react';
import Login from '../../pages/login'

afterEach(cleanup);

describe("Login Page", () => {
  test("should render Login Page with corrects components", () => {
    const { getByTestId } = render(
      <Login />
    );

    expect(getByTestId('username')).toBeDefined();
    expect(getByTestId('password')).toBeDefined();
    expect(getByTestId('submit')).toBeDefined();
    expect(getByTestId('register')).toBeDefined();
  });
});
