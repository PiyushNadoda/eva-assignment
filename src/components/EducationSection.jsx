import { useState, useEffect } from "react";
import classes from "./styles/educationSection.module.css";
import InputBox from "./EducationInputBox";

const EducationSection = ({ setUserData }) => {
  const [inputList, setInputList] = useState(2);
  const [error, setError] = useState(["", ""]);
  const [val, setVal] = useState(["", ""]);

  const addListItem = () => {
    setInputList(inputList + 1);
  };

  const removeListItem = () => {
    setInputList(inputList - 1);
    setUserData((prevState) => {
      const education = [...prevState?.education];
      education.pop();
      return { ...prevState, education };
    });
    setVal((prevState) => {
      const educations = [...prevState];
      educations.pop();
      return [...educations];
    });
  };

  const onChangeHandler = (e, key) => {
    setUserData((prevState) => {
      const education = [...prevState?.education];
      education[key] = e.target.value;
      return { ...prevState, education };
    });
    setVal((prevState) => {
      const education = [...prevState];
      education[key] = e.target.value;
      return [...education];
    });
  };

  useEffect(() => {
    val.forEach((value, key) => {
      if (value) {
        const e = error;
        e[key] = "";
        setError(e);
      } else {
        const e = error;
        e[key] = "This Field is Required";
        setError(e);
      }
    });
  }, [error, val]);

  return (
    <>
      <div className={classes.container}>
        <span>Education*</span>
        {[...Array(inputList)].map((_, key) => {
          return <InputBox key={key} index={key} onChangeHandle={onChangeHandler} removeListItem={removeListItem} />;
        })}
        {inputList !== 4 && (
          <div className={classes["add-more-btn"]} onClick={addListItem}>
            Add More+
          </div>
        )}
      </div>
    </>
  );
};

export default EducationSection;
