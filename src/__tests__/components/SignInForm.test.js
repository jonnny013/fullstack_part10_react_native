import SignInIndex from "../../components/signInForm/SignInIndex";
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native';

describe('SignIn', () => {
  it('calls onsubmit succesfully', async () => {

    const onSubmit = jest.fn()
    render(<SignInIndex onSubmit={onSubmit} />)

    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.press(screen.getByText('Sign In'));
    // screen.debug()
    await waitFor(() => {expect(onSubmit).toHaveBeenCalledTimes(1);})


    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'kalle',
      password: 'password',
    });
  })
})