import moment from "moment";
import toast from "react-hot-toast";

export const emailValidator = (email) => {
  const temp = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
  if (!temp) {
    return "Please enter valid email";
  }
  return "";
};

export const numberValidator = (number) => {
  if (number.length > 10) {
    return "Mobile number can not contain more than 10 digits";
  }
  if (number.length < 10) {
    return "Mobile number can not contain less than 10 digits";
  }
  const temp = String(number).toLowerCase().match(/^\d+$/);
  if (!temp) {
    return "Please enter valid number.";
  }
  return "";
};

export const experienceValidator = (number) => {
  const temp = String(number).toLowerCase().match(/^\d+$/);
  if (!temp) {
    return "Please enter valid number.";
  }
  return "";
};

export const submitValidation = (data) => {
  let isEducationFieldsFilled = true;
  data.education.forEach((item) => {
    if (item === "") {
      isEducationFieldsFilled = false;
    }
  });
  if (!isEducationFieldsFilled) {
    toast.error("fill the education fields");
    return false;
  }

  if (
    emailValidator(data?.email) ||
    numberValidator(data?.["mobile-number"]) ||
    experienceValidator(data?.experience)
  ) {
    toast.error("properly fill the required fields properly");
    return false;
  }

  if (
    data?.["doctor-name"] &&
    data?.email &&
    data?.specialty &&
    data?.["start-date"] &&
    data?.education &&
    data?.["mobile-number"] &&
    data?.experience &&
    data?.["work-experience"] &&
    data?.clinic &&
    data?.education.length >= 2
  ) {
    if (data?.["currently-working"]) {
      toast.success("Registration Completed");
      return true;
    }
    if (data?.["end-date"]) {
      if (
        moment(data?.["end-date"]).format() >
        moment(data?.["start-date"]).format()
      ) {
        toast.success("Registration Completed");
        return true;
      } else {
        toast.error("end date can't be greater than start date");
        return false;
      }
    } else {
      toast.error("end date is empty");
      return false;
    }
  }
  toast.error("properly fill the required fields");
  return false;
};

export const mobileValidationForNextBtn = (data) => {
  if (
    emailValidator(data?.email) ||
    numberValidator(data?.["mobile-number"]) ||
    experienceValidator(data?.experience)
  ) {
    toast.error("properly fill the required fields properly");
    return false;
  }

  if (
    data?.["doctor-name"] &&
    data?.email &&
    data?.specialty &&
    data?.["mobile-number"] &&
    data?.experience
  ) {
    return true;
  }
  toast.error("properly fill the required fields");
  return false;
};

export const mobileSubmitValidation = (data) => {
  if (data?.["start-date"] && data?.clinic) {
    if (data?.["currently-working"]) {
      toast.success("Registration Completed");
      return true;
    }
    if (data?.["end-date"]) {
      if (
        moment(data?.["end-date"]).format() >
        moment(data?.["start-date"]).format()
      ) {
        toast.success("Registration Completed");
        return true;
      } else {
        toast.error("end date can't be greater than start date");
        return false;
      }
    } else {
      toast.error("end date is empty");
      return false;
    }
  }
  toast.error("properly fill the required fields");
  return false;
};
