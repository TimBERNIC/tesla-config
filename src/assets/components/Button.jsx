const Button = ({ model, color, price, className, functionOnClick }) => {
  return (
    <div>
      <button onClick={functionOnClick} className={className}>
        <span>
          {model || color} - {price}
        </span>
      </button>
    </div>
  );
};

export default Button;
