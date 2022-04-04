import { useCallback, useEffect, useState } from "react";
import ReactDropdown from "react-dropdown";
import classes from "./styles/input.module.css";
import "react-dropdown/style.css";

const Input = ({
  type,
  placeholder,
  label,
  id,
  required,
  span,
  validation,
  setUserData,
  left,
  options,
  disabled,
  isShowing,
  isBelow,
}) => {
  const [error, setError] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isBlur, setIsBlur] = useState(false);

  const onBlurHandler = useCallback(
    (e) => {
      setIsBlur(true);
      if (required && !inputVal) {
        setError("This Field is Required");
      } else {
        validation ? setError(validation(inputVal)) : setError("");
      }
      if (!error) {
        setUserData?.((prevState) => {
          return { ...prevState, [id]: inputVal };
        });
      }
    },
    [inputVal, required, validation, error, id, setUserData]
  );

  useEffect(() => {
    if (isBlur) {
      onBlurHandler();
    }
    if (!isBlur) {
      setUserData?.((prevState) => {
        return { ...prevState, [id]: inputVal };
      });
    }
    return () => {};
  }, [onBlurHandler, isBlur, error, inputVal, setUserData, id]);

  return (
    <div
      className={`${classes.container} ${span ? classes["span"] : ""} ${
        disabled && classes.disabled
      } ${
        isShowing
          ? isBelow
            ? classes.show
            : classes.hide
          : isBelow
          ? classes.hide
          : classes.show
      }`}
    >
      <label htmlFor={id}>
        <span>
          {label}
          {required && "*"}
        </span>
        {options?.length > 0 ? (
          <ReactDropdown
            className={classes.dropdown}
            options={options}
            onBlur={onBlurHandler}
            onChange={(e) => setInputVal(e.value)}
            placeholder="Select an option"
          />
        ) : (
          <div className={classes["input-wrapper"]}>
            {left}
            <input
              className={classes.input}
              id={id}
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              onBlur={onBlurHandler}
              type={type ? type : "text"}
              placeholder={placeholder}
              disabled={disabled}
            />
          </div>
        )}
      </label>
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};

export default Input;
