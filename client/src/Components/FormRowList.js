import styled from "styled-components";
import React, { useState } from "react";

const FormRowList = ({
  labelText,
  name,
  value,
  handleChange,
  type,
  inputHeight,

  // overrides
  mainHeight,
  boldTitle,
  centerText,
}) => {
  const [currentInput, setCurrentInput] = useState("");
  return (
    <Wrapper height={mainHeight}>
      {" "}
      <div className="form-row">
        <label
          htmlFor={name}
          className="form-label"
          style={{
            marginTop: "10px",
            marginBottom: "6px",
            textAlign: centerText ? "center" : "left",
            fontWeight: boldTitle ? "bold" : "normal",
          }}
        >
          {labelText || name}{" "}
        </label>

        <div className="list-container">
          <ul className="list">
            {value.map((item, index) => {
              return (
                // return a div with the item and a button to remove the item at the end of the div as an x
                <li
                  key={index}
                  className="list-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="list-item-text"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    {index + 1} - {item}
                  </span>
                  <button
                    className="btn btn-hipster"
                    onClick={(e) => {
                      e.preventDefault();
                      // remove the item from the list array
                      handleChange({
                        target: {
                          name: name,
                          value: value.filter((item, i) => i !== index && item),
                        },
                      });
                    }}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
          <input
            type={type}
            value={currentInput}
            name={name}
            onChange={(e) => {
              e.preventDefault();
              setCurrentInput(e.target.value);
            }}
            className="form-input"
            style={{
              inputHeight: inputHeight || "40px",
            }}
            disabled={value.length >= 5}
          />

          <button
            className="btn btn-block btn-hipster"
            onClick={(e) => {
              e.preventDefault();
              // add a empty string to the list array
              handleChange({
                target: {
                  name: name,
                  value: [...value, currentInput],
                },
              });
              setCurrentInput("");
            }}
            disabled={!currentInput || value.length >= 5}
            z
          >
            add item
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section.attrs((props) => ({
  height: props.height || "400px",
}))`
  height: ${(props) => props.height};
  /* overflow: auto; */

  .normal {
    color: var(--textColor);
  }
  .red {
    color: var(--red-light);
  }
`;
export default FormRowList;
