import styled from "styled-components";

const FormRowList = ({
  labelText,
  name,
  value,
  handleChange,
  type,
  height,
}) => {
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
        </label>
        {/* <textarea
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
        /> */}

        <div className="list-container">
          <ul className="list">
            {value.map((item, index) => {
              return (
                <li key={index} className="list-item">
                  {item}
                </li>
              );
            })}
          </ul>
          (/* button to add item to list */ )
          <button
            className="btn btn-block btn-hipster"
            onClick={(e) => {
              e.preventDefault();
              // add a empty string to the list array
              handleChange({
                target: {
                  name: name,
                  value: [...value, "dsfs"],
                },
              });
            }}
          >
            add item
          </button>
          {/* <button
            className="btn btn-block btn-hipster"
            onClick={(e) => {
              e.preventDefault();
              handleChange({
                target: {
                  name: name,
                  value: "",
                },
              });
            }}
          >
            clear
          </button> */}
        </div>
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
export default FormRowList;
