// eslint-disable-next-line react/prop-types
const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className="checkbox checkbox-primary rounded"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
