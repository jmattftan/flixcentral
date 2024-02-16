import React from "react";
import NavigationBar from "../main_page_components/NavigationBar.jsx";
import Featured from "../main_page_components/Featured.jsx";
import NowShowing from "../main_page_components/NowShowing.jsx";
import ComingSoon from "../main_page_components/ComingSoon.jsx";
import MoreDetailsModal from "../main_page_components/MoreDetailsModal.jsx";

function MainPage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Featured></Featured>
      <NowShowing></NowShowing>
      <ComingSoon></ComingSoon>
      <MoreDetailsModal></MoreDetailsModal>
    </>
  );
}

export default MainPage;
