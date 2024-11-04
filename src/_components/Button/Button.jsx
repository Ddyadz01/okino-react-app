import './button.scss';

const Button = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} className={type}>
      {children}
    </button>
  );
};

export default Button;
