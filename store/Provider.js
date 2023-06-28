"use client";
import { Provider } from "react-redux";
import store from "./redux";

const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
