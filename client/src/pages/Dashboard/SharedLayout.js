import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/LandingPage";

const SharedLayout = ({ children }) => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">Add Job</Link>
        <Link to="all-jobs">All Jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
