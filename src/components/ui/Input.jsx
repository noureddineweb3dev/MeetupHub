function Input({ placeholderText, inputType, inputStyles, inputID }) {
  return (
    <input type={inputType} placeholder={placeholderText} className={inputStyles} id={inputID} />
  );
}

export default Input;
