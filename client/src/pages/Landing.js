import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracker</span>
          </h1>
          <p>
            Shukatsu pronounced "shoe cat su " is the Japanese word for job
            hunting. Let's use this app keep track of your interviews and get
            that dream job.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
