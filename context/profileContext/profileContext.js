import { createContext } from "react";

const ProfileContext = createContext({
  isProfileOpened: false,
  setIsProfileOpened: (state) => {},
});

export default ProfileContext;
