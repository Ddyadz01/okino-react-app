import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

import styles from '../sign.module.scss';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.sign}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          className={errors.email ? styles.form__input_error : styles.form__input}
          {...register('email', { required: true })}
          placeholder="Email"
        />
        <div className={styles.form__error}>
          {errors.email && 'Поле обязательно для заполнения.'}
        </div>
        <input
          className={errors.password ? styles.form__input_error : styles.form__input}
          {...register('password', { required: true })}
          placeholder="Password"
        />
        <div className={styles.form__error}>
          {errors.password && 'Поле обязательно для заполнения.'}
        </div>
        <button disabled={errors.email || errors.username || errors.password} type={'submit'}>
          Login
        </button>
      </form>
      <p>
        Dont you have an <Link to="/register">account yet?</Link>
      </p>
    </div>
  );
};

export default Login;
