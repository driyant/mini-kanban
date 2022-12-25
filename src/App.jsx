import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchTaskItemGroup1,
  fetchTaskItemGroup2,
  fetchTaskItemGroup3,
  fetchTaskItemGroup4,
  login,
} from "./store/action";
import { Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      dispatch(login())
    }
    dispatch(fetchTaskItemGroup1());
    dispatch(fetchTaskItemGroup2());
    dispatch(fetchTaskItemGroup3());
    dispatch(fetchTaskItemGroup4());
    navigate("/v1");
  }, []);
  return (
    <Routes>
      <Route path="/v1" element={<Homepage />} />
    </Routes>
  );
}

export default App;
