import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const isInputValid = validateValue(inputValue);

  const validateInputHandler = () => {
    setIsInputTouched(true);
    if (!isInputValid) {
      return false;
    } else {
      return true;
    }
  };
  const changeInputHandler = (e) => {
    setInputValue(e.target.value.toString());
  };
  const blurInputHandler = () => {
    if (!isInputTouched) {
      setIsInputTouched(true);
    }
  };
  const reset = () => {
    setInputValue("");
    setIsInputTouched(false);
  };

  return {
    inputValue,
    isInputTouched,
    isInputValid,
    validateInputHandler,
    changeInputHandler,
    blurInputHandler,
    reset,
  };
};
export default useInput;
