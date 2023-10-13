import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegisterFormLabel, RegisterFormForm, InputForm, Button} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormForm  onSubmit={handleSubmit} autoComplete="off">
      <RegisterFormLabel >
        Username
        <InputForm type="text" name="name" placeholder="Alexander Repeta"/>
      </RegisterFormLabel>
      <RegisterFormLabel >
        Email
        <InputForm type="email" name="email" placeholder="info@goit.ua" />
      </RegisterFormLabel>
      <RegisterFormLabel >
        Password
        <InputForm type="password" name="password" placeholder="********"/>
      </RegisterFormLabel>
      <Button type="submit">Register</Button>
    </RegisterFormForm>
  );
};
