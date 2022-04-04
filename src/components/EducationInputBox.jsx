import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import classes from "./styles/inputBox.module.css";
import { useState } from "react";

const InputBox = ({ index, removeListItem, onChangeHandle }) => {
  const [error, setError] = useState("");
  const [val, setVal] = useState("");
  const [isBlur, setIsBlur] = useState(false);

  const onChangeHandler = (e) => {
    setVal(e.target.value);
    if (isBlur) {
      if (!val) {
        setError("This field is required");
      } else {
        setError("");
      }
    }
    onChangeHandle(e, index)
  };

  const onBlurHandler = () => {
    setIsBlur(true);
    if (!val) {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  return (
    <div key={index}>
      <div className={classes["input-wrapper"]}>
        <input
          className={classes.input}
          type={"text"}
          placeholder="eg.   MBBS - Jagadguru Jayadeva Murugarajendra Medical College (JJMMC), 2008"
          onChange={(e) => {
            onChangeHandler(e);
          }}
          onBlur={() => {
            onBlurHandler();
          }}
        />
        {index > 1 && (
          <div className={classes.delete} onClick={removeListItem}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        )}
      </div>
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};

export default InputBox;
