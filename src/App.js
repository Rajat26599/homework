
import './App.css';
// import { Base64 } from 'js-base64';
// import {html2canvas} from 'html2canvas';
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import { Dashboard } from "./components/dashboard/Dashboard";
import { Homework } from './components/homework/Homework';
import { VideoBackground } from './components/common/videoBackground/VideoBackground';
import { useEffect, useState } from 'react';
import { CoverLetter } from './components/coverLetter/CoverLetter';
import { Button } from './components/common/button/Button';


function App() {
  const location = useLocation()
  const [pathname, setPathname] = useState('/');
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div>
      {pathname !== '/' && <VideoBackground></VideoBackground>}
      {pathname !== '/' && <Button type='home'>Home</Button>}
      <Routes>
        <Route
            exact
            path="/"
            element={<Dashboard />}
        ></Route>
        <Route
            exact
            path="/homework"
            element={<Homework />}
        ></Route>
        <Route
            exact
            path="/cover-letter-generator"
            element={<CoverLetter />}
        ></Route>
      </Routes>


    </div>
  );
}

export default App;
