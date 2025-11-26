function Button({ text, buttonStyles }) {
  return (
    <div>
      <button className={buttonStyles}>{text}</button>
    </div>
  );
}

export default Button;
