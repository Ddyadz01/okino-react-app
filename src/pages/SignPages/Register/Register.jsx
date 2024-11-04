'use client';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

import styles from '../sign.module.scss';
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.sign}>
      <h1>Create Account</h1>
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
          className={errors.username ? styles.form__input_error : styles.form__input}
          {...register('username', { required: true })}
          placeholder="Username"
        />
        <div className={styles.form__error}>
          {errors.username && 'Поле обязательно для заполнения.'}
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
          Create
        </button>
      </form>
      <p>
        {' '}
        Do you already <Link to="/login">have an account?</Link>
      </p>
    </div>
  );
};

export default Register;
