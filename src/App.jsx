import NavigationBar from "./NavigationBar.jsx";
import Featured from "./Featured.jsx";
import NowShowing from "./NowShowing.jsx";
import ComingSoon from "./ComingSoon.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Featured></Featured>
      <NowShowing></NowShowing>
      <ComingSoon></ComingSoon>
    </>
  );
}

export default App;
