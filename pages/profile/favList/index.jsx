import React from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import FavoritesList from "../../../containers/profile/favoritesList";

function favListPage() {
  return <FavoritesList />;
}

export default favListPage;
favListPage.Layout = ProfileLayout;
