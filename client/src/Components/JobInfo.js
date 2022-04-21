import styled from "styled-components";

const JobInfo = ({ icon, text, type }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      {type === "url" ? (
        <a
          href={text}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "underline",
            color: "var(--black)",
          }}
        >
          {text}
        </a>
      ) : (
        <span className="text">{text} </span>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    color: var(--textColor);
  }
`;

export default JobInfo;
