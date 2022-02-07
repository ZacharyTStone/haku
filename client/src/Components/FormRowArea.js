import styled from "styled-components";

const FormRowArea = ({ labelText, name, value, handleChange, type }) => {
  return (
    <Wrapper>
      {" "}
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}{" "}
          <span className={500 - value.length >= 0 ? "blue" : "red"}>
            * {500 - value.length} characters left
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
            height: "100px",
            width: "100%",
          }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .blue {
    color: var(--primary-800);
  }
  .red {
    color: var(--red-dark);
  }
`;
export default FormRowArea;
