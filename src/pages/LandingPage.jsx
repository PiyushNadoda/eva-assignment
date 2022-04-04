import classes from "../styles/landingPage.module.css";
import Navbar from "../components/Navbar";
import modelImg from "../assets/images/model.png";
import harvardLogo from "../assets/images/harvard.png";
import oxfordLogo from "../assets/images/oxford.png";
import stanfordLogo from "../assets/images/stanford.png";
import cornellLogo from "../assets/images/cornell.png";
import iitLogo from "../assets/images/iit.png";

const LandingPage = ({ openFormModal, scroll }) => {
  return (
    <>
      <div className={`${classes["container"]} ${scroll && classes.scroll}`}>
        <div className={classes["header-container"]}>
          <Navbar />
          <div className={classes["heading-container"]}>
            <h1>
              Building a<strong> community of Doctors </strong>
              for the future
            </h1>
            <div className={classes["header-background"]}>
              <img src={modelImg} alt="Model" />
            </div>
            <div className={classes["btn-container"]}>
              <button
                className={classes["join-btn"]}
                onClick={() => {
                  openFormModal(true);
                }}
              >
                Join The Community
              </button>
              <button className={classes["explore-btn"]}>Explore</button>
            </div>
          </div>
        </div>
        <div className={classes["footer-container"]}>
          <h2>Our community comprises graduates from</h2>
          <div className={classes.universities}>
            <div>
              <img src={harvardLogo} alt="harvard university logo" />
            </div>
            <div>
              <img src={stanfordLogo} alt="stanford university logo" />
            </div>
            <div>
              <img src={oxfordLogo} alt="oxford university logo" />
            </div>
            <div>
              <img src={cornellLogo} alt="cornell university logo" />
            </div>
            <div>
              <img src={iitLogo} alt="IIT Delhi logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
