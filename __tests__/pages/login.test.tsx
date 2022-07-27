import { cleanup, render } from '@testing-library/react';
import Login from '../../pages/login'

afterEach(cleanup);

describe("Login Page", () => {
  it("should render Login Page with corrects components", () => {
    const { getByTestId } = render(
      <Login />
    );

    expect(getByTestId('username')).toBeDefined();
    expect(getByTestId('password')).toBeDefined();
    expect(getByTestId('submit')).toBeDefined();
    expect(getByTestId('register')).toBeDefined();
  });
});
