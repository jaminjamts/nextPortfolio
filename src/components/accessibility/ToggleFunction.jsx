export const ToggleFunction = ({ handleChange }) => {
  return (
    <div className="absolute hidden">
      <input type="checkbox" id="check" onClick={handleChange} />
    </div>
  );
};
