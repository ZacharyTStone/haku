import moment from "moment";
import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaLink,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import JobInfo from "./JobInfo";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
  notes,
  stared,
  URL,
  pros,
  cons,
}) => {
  const { setEditJob, deleteJob } = useAppContext();
  console.log(status);

  const [showNotes, setShowNotes] = useState(false);
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <div className="job">
        <header>
          <div className="main-icon">{company.charAt(0)}</div>

          <div className="info">
            <h5>
              {position}
              {stared === "true" ? (
                <FaStar color="gold" size={18} style={{ paddingTop: "5px" }} />
              ) : null}{" "}
            </h5>
            <p>{company}</p>
          </div>
        </header>
        <div className="content">
          <div className="content-center">
            <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
            <JobInfo icon={<FaCalendarAlt />} text={date} />
            <JobInfo icon={<FaBriefcase />} text={jobType} />
            <div
              style={{
                marginTop: "10px",
              }}
            >
              Job Status : <span className={`status ${status}`}>{status}</span>
            </div>
            <div
              style={{
                marginTop: "10px",
                height: "fit-content",
                maxWidth: "100%",
                // wrap text
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <FaLink />{" "}
              <a href={URL} target="_blank" rel="noopener noreferrer">
                {URL}
              </a>
            </div>
            <button
              className="btn btn-hipster"
              onClick={() => setShowNotes(!showNotes)}
            >
              {showNotes ? "Hide Job Notes" : "Show Job Notes"}
            </button>
          </div>
          {showNotes && (
            <>
              <div className="notes">
                <h5>Notes</h5>
                <p>{notes}</p>
              </div>

              <div className="pros notes">
                <h5>Pros</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  {pros.map((pro, index) => {
                    return (
                      <p key={index}>
                        {index + 1} - {pro}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="cons notes">
                <h5>Cons</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {cons.map((con, index) => {
                    return (
                      <p key={index}>
                        {index + 1} - {con}
                      </p>
                    );
                  })}
                </div>
              </div>
            </>
          )}
          <footer>
            <div className="actions">
              <Link
                to="/add-job"
                className="btn edit-btn"
                onClick={() => setEditJob(_id)}
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn delete-btn"
                onClick={() => deleteJob(_id)}
              >
                Delete
              </button>
            </div>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  .job {
    padding: 2rem;
    display: flex;

    flex-direction: column;
    justify-content: space-between;
  }
  .notes {
    // make it look like a yellow sticky note
    background: #fff3c7;
    border-radius: 0px;

    padding: 1rem;
    border-top: 1px solid var(--light-gray);
    width: 100%;
    display: flex;
    min-height: 150px;
    flex-wrap: wrap;
    overflow: auto;
  }

  p {
    word-break: break-all;
    white-space: normal;
  }

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }

  .stared {
    background: "white";
  }

  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: var(--yellow-light);
    color: var(--text-color);
  }

  .followed {
    background: var(--yellow-light);
    color: var(--text-color);
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    /* padding: 0.2rem; */
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
`;

export default Job;
