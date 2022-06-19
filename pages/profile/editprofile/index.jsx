import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import EditProfile from "../../../containers/profile/editProfile";
import { getUserData } from "../../../containers/profile/methods/getUserData";

function EditProfilePage() {
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
}

export default EditProfilePage;
EditProfilePage.Layout = ProfileLayout;
