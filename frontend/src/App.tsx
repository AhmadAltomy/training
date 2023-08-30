import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Laith/Landing";
import "./App.css";
import AllIn from "./Laith/zustandTask/AllIn";
import EditEventForm from "./Laith/zustandTask/EditEventForm";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/zustand" element={<AllIn />}/>
        <Route path="/zustand/edit/:eventId" element={<EditEventForm />} />
        
      </Routes>
    </Router>
  );
};

export default App;
