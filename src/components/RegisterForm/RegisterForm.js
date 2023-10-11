import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegisterFormLabel, RegisterFormForm} from './RegisterForm.styled';
// import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.currentTarget.elements.name.value)
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
        <input type="text" name="name" />
      </RegisterFormLabel>
      <RegisterFormLabel >
        Email
        <input type="email" name="email" />
      </RegisterFormLabel>
      <RegisterFormLabel >
        Password
        <input type="password" name="password" />
      </RegisterFormLabel>
      <button type="submit">Register</button>
    </RegisterFormForm>
  );
};
