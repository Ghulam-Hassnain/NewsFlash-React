// import './App.css';
// "1a601ef7293f4e7a85c4e3de26d8bef4" from newsapi.org
// "pub_2649beee2088e5a6b4ec26947606d4ff9400"
// "homepage": "https://Ghulam-Hassnain.github.io/NewsFlash-React",
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
import {
  // HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  // const updateProgress = (progress) => {
  //   setProgress(progress);
  // }
  return (
    <div>
      {/* <Router> */}
      <Navbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Routes>
        <Route path="/" element={<News key="general" apiKey={apiKey} setProgress={setProgress} country="us" category="general" pageSize={pageSize} />} />
        <Route path="/general" element={<News key="general" apiKey={apiKey} setProgress={setProgress} country="us" category="general" pageSize={pageSize} />} />
        <Route path="/business" element={<News key="business" apiKey={apiKey} setProgress={setProgress} country="us" category="business" pageSize={pageSize} />} />
        <Route path="/entertainment" element={<News key="entertainment" apiKey={apiKey} setProgress={setProgress} country="us" category="entertainment" pageSize={pageSize} />} />
        <Route path="/health" element={<News key="health" apiKey={apiKey} setProgress={setProgress} country="us" category="health" pageSize={pageSize} />} />
        <Route path="/science" element={<News key="science" apiKey={apiKey} setProgress={setProgress} country="us" category="science" pageSize={pageSize} />} />
        <Route path="/sports" element={<News key="sports" apiKey={apiKey} setProgress={setProgress} country="us" category="sports" pageSize={pageSize} />} />
        <Route path="/technology" element={<News key="technology" apiKey={apiKey} setProgress={setProgress} country="us" category="technology" pageSize={pageSize} />} />
      </Routes>
      {/* </Router> */}
    </div >
  )
}

export default App;