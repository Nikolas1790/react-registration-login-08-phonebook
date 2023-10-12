import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, InputLogIn, Label, SubmitButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <InputLogIn type="email" name="email" />
      </Label>
      <Label >
        Password
        <InputLogIn type="password" name="password" />
      </Label>
      <SubmitButton type="submit">Log In</SubmitButton>
    </Form>
  );
};
