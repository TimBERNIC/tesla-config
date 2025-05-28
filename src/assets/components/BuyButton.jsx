const BuyButton = ({ title, functionOnClick, className }) => {
  return (
    <div>
      <button onClick={functionOnClick} className={className}>
        {title}
      </button>
    </div>
  );
};

export default BuyButton;
