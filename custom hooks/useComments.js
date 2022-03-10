import { useState } from "react";

const useComments = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [runThrough, setRunThrough] = useState("");
  const [state, setState] = useState("");
  const [launcher, setLauncher] = useState("");

  return (
   title,
   description,
   runThrough,
   state,
   launcher
  )
};

export default useComments;
