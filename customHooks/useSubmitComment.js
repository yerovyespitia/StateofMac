import { useState } from "react";
import { useSelector } from "react-redux";

const useSubmitComment = () => {
  const user = useSelector((state) => state.user.value);
  const [addReportState, setAddReportState] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [runThrough, setRunThrough] = useState("");
  const [state, setState] = useState("");
  const [launcher, setLauncher] = useState("");
  const [macUsed, setMacUsed] = useState("");

  const addTitle = (e) => setTitle(e.target.value);
  const addDescription = (e) => setDescription(e.target.value);
  const addRunThrough = (e) => setRunThrough(e.target.value);
  const addState = (e) => setState(e.target.value);
  const addLauncher = (e) => setLauncher(e.target.value);
  const addMacUsed = (e) => setMacUsed(e.target.value);
  const reportStateToggle = () => setAddReportState(!addReportState);

  const cancelSubmit = () => {
    setAddReportState(!addReportState);
    setTitle("");
    setDescription("");
    setRunThrough("");
    setState("");
    setLauncher("");
    setMacUsed("");
  };

  const newComment = {
    username: user.user != null && user.user.username,
    title,
    description,
    runThrough,
    state,
    launcher,
    macUsed,
  };

  return {
    addReportState,
    title,
    description,
    runThrough,
    state,
    launcher,
    macUsed,
    addTitle,
    addDescription,
    addRunThrough,
    addState,
    addLauncher,
    addMacUsed,
    reportStateToggle,
    cancelSubmit,
    newComment,
  };
};

export default useSubmitComment;
