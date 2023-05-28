const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  height,
  required,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}{" "}
        {required && (
          <span
            style={{
              color: "red",
            }}
          >
            *
          </span>
        )}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        style={{
          height: height || "40px",
        }}
      />
    </div>
  );
};

export default FormRow;
