function Button({ text }) {
  return (
    <div>
      <button className="btn bg-gray-50 text-black px-3 py-1 rounded-2xl font-medium hover:shadow-md hover:bg-gray-100 ">
        {text}
      </button>
    </div>
  );
}

export default Button;
