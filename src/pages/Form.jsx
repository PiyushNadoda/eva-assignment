import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Input from "../components/Input";
import classes from "../styles/form.module.css";

import {
  emailValidator,
  experienceValidator,
  numberValidator,
  submitValidation,
  mobileValidationForNextBtn,
  mobileSubmitValidation,
} from "../Utils/Validators";
import EducationSection from "../components/EducationSection";

const Form = () => {
  const [userData, setUserData] = useState({
    address: "",
    clinic: "",
    "doctor-name": "",
    email: "",
    experience: "",
    "start-date": "",
    "end-date": "",
    "mobile-number": "",
    specialty: "",
    "work-experience": "",
    education: [],
  });
  const [isCurrentlyWorkingSelected, setIsCurrentlyWorkingSelected] =
    useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const checkboxHandler = (e) => {
    setIsCurrentlyWorkingSelected(e.target.checked);
    setUserData({ ...userData, "currently-working": e.target.checked });
  };

  const submitHandler = () => {
    if (submitValidation(userData)) {
      console.log(userData);
    }
  };

  const submitHandlerForMobile = () => {
    if (mobileSubmitValidation(userData)) {
      console.log(userData);
    }
  };

  const handleNext = () => {
    setIsShowing(mobileValidationForNextBtn(userData));
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.form}>
          <h2>Fill up the details to register</h2>
          <div className={classes.inputs}>
            <Input
              id="doctor-name"
              label="Doctor Name"
              placeholder="Full Name"
              setUserData={setUserData}
              isShowing={isShowing}
              required
            />
            <Input
              id="specialty"
              label="Specialty"
              placeholder="Select specialization"
              options={["Specialty A", "Specialty B", "Specialty C"]}
              setUserData={setUserData}
              isShowing={isShowing}
              required
            />
            <Input
              id="email"
              validation={emailValidator}
              label="Email"
              type="email"
              placeholder="you@example.com"
              setUserData={setUserData}
              isShowing={isShowing}
              required
              span
            />
            <Input
              id="mobile-number"
              validation={numberValidator}
              label="Mobile Number"
              placeholder="6386432858"
              setUserData={setUserData}
              left={
                <span className={classes.flex}>
                  IND <FontAwesomeIcon icon={faAngleDown} />
                </span>
              }
              isShowing={isShowing}
              required
              span
            />
            <Input
              id="experience"
              label="Experience"
              placeholder="Write in numbers"
              validation={experienceValidator}
              required
              setUserData={setUserData}
              isShowing={isShowing}
            />
            <button
              className={`${isShowing ? classes.hide : classes["next-btn"]}`}
              onClick={handleNext}
            >
              Next
            </button>
            <Input
              id="clinic"
              label="Clinic"
              placeholder="Eg. Sharda Clinic"
              options={["Sharda Clinic", "Sahyog Clinic", "Shiv Clinic"]}
              required
              setUserData={setUserData}
              isShowing={isShowing}
              isBelow
            />
            <Input
              id="address"
              label="Address"
              placeholder="eg. Near park street, Calcutta, W.B."
              span
              setUserData={setUserData}
              isShowing={isShowing}
              isBelow
            />
            <Input
              id="work-experience"
              label="Add work experience"
              placeholder="eg.   2013 - 2014 Senior registrar at Sahyadri Narayana Hrudayala"
              span
              setUserData={setUserData}
              isShowing={isShowing}
              isBelow
            />
            <Input
              id="start-date"
              label="Start Date"
              type="date"
              setUserData={setUserData}
              isShowing={isShowing}
              required
              isBelow
            />
            <Input
              id="end-date"
              label="End Date"
              type="date"
              required={!isCurrentlyWorkingSelected}
              disabled={isCurrentlyWorkingSelected}
              setUserData={setUserData}
              isShowing={isShowing}
              isBelow
            />
            <div></div>
            <div className={isShowing ? classes.block : classes.hide}>
              <input type="checkbox" onChange={checkboxHandler} />
              <span> presently at this position</span>
            </div>
          </div>
          <EducationSection setUserData={setUserData} />
          <button className={classes["submit-btn"]} onClick={submitHandler}>
            Complete Registration
          </button>
          <button
            className={`${
              isShowing ? classes["submit-btn-mobile"] : classes.hide
            }`}
            onClick={submitHandlerForMobile}
          >
            Complete Registration
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
