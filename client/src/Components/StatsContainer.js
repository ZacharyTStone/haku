import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaMailBulk,
  FaList,
} from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const StatsContainer = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { stats, monthlyApplications, staredJobs } = useAppContext();

  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      // color: "#BDBA19",
      color: "var(--primary-300)",
      bcg: "var(--primary-50)",
    },
    {
      title: "followed up applications",
      count: stats.followedUp || 0,
      icon: <FaMailBulk />,
      color: "var(--primary-300)",
      bcg: "var(--primary-50)",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "var(--primary-300)",
      bcg: "var(--primary-50)",
    },
    {
      title: "Jobs added during " + monthNames[new Date().getMonth()],
      count: monthlyApplications.length || 0,
      icon: <BsFillCalendar2WeekFill />,
      color: "var(--primary-300)",
      bcg: "var(--primary-50)",
    },
    {
      title: "Stared Jobs",
      count: staredJobs.length || 0,
      icon: <AiOutlineStar />,
      color: "var(--primary-300)",
      bcg: "var(--primary-50)",
    },
    {
      title: "Total Jobs",
      count:
        stats.pending + stats.interview + stats.declined + stats.followedUp ||
        0,
      icon: <FaList />,
      color: "var(--primary-300)",
      bcg: "var(--primary-50)",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`;

export default StatsContainer;
