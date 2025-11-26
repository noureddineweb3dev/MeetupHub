function Input({ placeholderText, inputType, inputStyles }) {
  return <input type={inputType} placeholder={placeholderText} className={inputStyles} />;
}

export default Input;
