// node libraries
import React from "react";

import { useState, useEffect } from "react";
// components
import EditProfile from "../../containers/profile/editProfile";
// methods
import { getUserData } from "../../containers/profile/methods/getUserData";
// scss
import ProfileLayout from "../../components/layout/ProfileLayout";

const Profile = () => {
  const [dataProfile, setDataProfile] = useState({});

  useEffect(() => {
    async function fetchData() {
      const ans = await getUserData();
      setDataProfile(ans);
    }
    fetchData();
  }, []);

  return (
    <>
      {dataProfile.FK_User && (
        <EditProfile
          dataProfile={dataProfile}
          setDataProfile={setDataProfile}
        />
      )}
    </>
  );
};
// export
export default Profile;

Profile.Layout = ProfileLayout;
