import ProfileContext from "./profileContext";
import { useState } from "react";

const ProfileProvider = (props) => {
  const [profileState, setProfileState] = useState(false);

  const setIsProfileOpenedHandler = (state) => {
    setProfileState(state);
  };

  const profileContext = {
    isProfileOpened: profileState,
    setIsProfileOpened: setIsProfileOpenedHandler,
  };

  return (
    <ProfileContext.Provider value={profileContext}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
