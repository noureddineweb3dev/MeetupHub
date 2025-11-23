function Button({ text }) {
  return (
    <div>
      <button className="btn bg-red-50 text-red-800 px-3 py-1 rounded-lg font-medium hover:bg-red-100">
        {text}
      </button>
    </div>
  );
}

export default Button;
