const Input = ({ className, ...props }) => {
  return (
      <input className={`input input-bordered w-full bg-transparent text-white ${className}`} {...props} />
  );
};

export default Input;
