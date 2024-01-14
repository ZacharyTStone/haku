import styled from "styled-components";

const FormRowArea = ({
  labelText,
  name,
  value,
  handleChange,
  type,
  height,
}) => {
  const textAreaLimit = 600;

  return (
    <Wrapper>
      {" "}
      <div className="form-row">
        <label
          htmlFor={name}
          className="form-label"
          style={{
            marginTop: "10px",
            marginBottom: "6px",
          }}
        >
          {labelText || name}{" "}
          <span
            className={textAreaLimit - value.length >= 0 ? "normal" : "red"}
          >
            * {textAreaLimit - value.length} characters left
          </span>
        </label>
        <textarea
          wrap="hard"
          resize="both"
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className="form-input"
          style={{
            height: height || "100px",
            width: "100%",
          }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .normal {
    color: var(--textColor);
  }
  .red {
    color: var(--red-light);
  }
`;
export default FormRowArea;
