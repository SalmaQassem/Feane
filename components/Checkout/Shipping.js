import classes from "../../styles/_shipping.module.scss";
import { useState, useCallback } from "react";
import useInput from "@/hooks/useInput";
import SelectorInput from "../SelectorInput";

const DUMMYCOUNTRIES = [
  { id: "c0", value: "", governorates: [] },
  {
    id: "c1",
    value: "Egypt",
    governorates: [
      { id: "c1g1", value: "Cairo" },
      { id: "c1g2", value: "Alexandria" },
      { id: "c1g3", value: "Giza" },
      { id: "c1g4", value: "Ismailia" },
    ],
  },
  {
    id: "c2",
    value: "Saudi Arabia",
    governorates: [
      { id: "c2g1", value: "Riyadh" },
      { id: "c2g2", value: "Diriyah" },
      { id: "c2g3", value: "Mecca" },
      { id: "c2g4", value: "Jeddah" },
      { id: "c2g5", value: "Ta'if" },
      { id: "c2g6", value: "Dammam" },
    ],
  },
  {
    id: "c3",
    value: "Jordan",
    governorates: [
      { id: "c3g1", value: "Amman" },
      { id: "c3g2", value: "Zarqa" },
      { id: "c3g3", value: "Madaba" },
      { id: "c3g4", value: "Mafraq" },
      { id: "c3g5", value: "Ajloun" },
      { id: "c3g6", value: "Irbid" },
    ],
  },
];

const Shipping = () => {
  const [isCountryOpened, setIsCountryOpened] = useState(false);
  const [isGovernorateOpened, setIsGovernorateOpened] = useState(false);

  const {
    inputValue: countryValue,
    isInputTouched: isCountryTouched,
    isInputValid: isCountryValid,
    validateInputHandler: validateCountryHandler,
    changeInputHandler: changeCountryHandler,
    blurInputHandler: blurCountryHandler,
    reset: resetCountry,
  } = useInput((value) => value !== "");

  const {
    inputValue: governorateValue,
    isInputTouched: isGovernorateTouched,
    isInputValid: isGovernorateValid,
    validateInputHandler: validateGovernorateHandler,
    changeInputHandler: changeGovernorateHandler,
    blurInputHandler: blurGovernorateHandler,
    reset: resetGovernorate,
  } = useInput((value) => value !== "");

  const governorates = DUMMYCOUNTRIES.find(
    (item) => item.value === countryValue
  ).governorates;

  const onSelectCountry = (e) => {
    changeCountryHandler(e);
    resetGovernorate();
  };
  const onOpenCountryHandler = useCallback(() => {
    blurCountryHandler();
    setIsCountryOpened((prevState) => {
      return !prevState;
    });
  }, [blurCountryHandler]);

  const onOpenGovernorateHandler = useCallback(() => {
    blurGovernorateHandler();
    setIsGovernorateOpened((prevState) => {
      return !prevState;
    });
  }, [blurGovernorateHandler]);

  return (
    <div className={classes.container}>
      <h1>shipping details</h1>
      <div className={classes.info}>
        <div className={classes.inputContainer}>
          <p className={classes.label}>country</p>
          <SelectorInput
            data={DUMMYCOUNTRIES}
            default="Choose Country?"
            changeSelector={onSelectCountry}
            isSelectorOpened={isCountryOpened}
            isValid={isCountryValid}
            isTouched={isCountryTouched}
            onOpen={onOpenCountryHandler}
            selector={countryValue}
          />
        </div>
        <div className={classes.inputContainer}>
          <p className={classes.label}>governorate</p>
          <SelectorInput
            data={governorates}
            default="Choose Governorate?"
            changeSelector={changeGovernorateHandler}
            isSelectorOpened={isGovernorateOpened}
            isValid={isGovernorateValid}
            isTouched={isGovernorateTouched}
            onOpen={onOpenGovernorateHandler}
            selector={governorateValue}
          />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label} htmlFor="city-id">
            city
          </label>
          <input type="text" className={classes.input} id="city-id" />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label} htmlFor="street1-id">
            street line 1
          </label>
          <input type="text" className={classes.input} id="street1-id" />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label} htmlFor="street2-id">
            street line 2
          </label>
          <input type="text" className={classes.input} id="street2-id" />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
