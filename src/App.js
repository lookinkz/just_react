import React from "react";
import EnrolmentForm from "./EnrolmentForm";
import EnrolList from "./EnrolList";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [program, setProgram] = useState("UG");
  const [ugSeats, setUgSeats] = useState(60);
  const [pgSeats, setPgSeats] = useState(40);
  const [studentDetails, setStudentDetails] = useState({});
  const [action, setAction] = useState();
  const [selItemId, setSelItemId] = useState();

  const handleItemSelection = (action, id) => {
    setAction(action);
    setSelItemId(id);
  };

  const handleChange = (event) => {
    setProgram(event.target.value);
    setPgSeats(pgSeats);
    setUgSeats(ugSeats);
  };

  const setUpdatedSeats = (updatedSeats) => {
    if (program === "UG") {
      setUgSeats(updatedSeats);
    } else {
      setPgSeats(updatedSeats);
    }
  };

  const restoreSeats = (pgm) => {
    pgm === "UG" ? setUgSeats(ugSeats + 1) : setPgSeats(pgSeats + 1);
    setAction("");
  };

  return (
    <div className="App">
      <div className="programs">
        <h3 className="title">Student Enrolment Form</h3>
        <ul className="ulEnrol">
          <li className="parentLabels" onChange={handleChange}>
            <input type="radio" value="UG" name="programGroup" defaultChecked />
            Undegraduate
            <input
              type="radio"
              className="radioSel"
              value="PG"
              name="programGroup"
            />
            Postgraduate
          </li>
          <li>
            <label className="parentLabels">
              Remaining {program} Seats - {program === "UG" ? ugSeats : pgSeats}
            </label>
          </li>
        </ul>
      </div>
      <EnrolmentForm
        chosenProgram={program}
        setUpdatedSeats={setUpdatedSeats}
        currentSeats={program === "UG" ? ugSeats : pgSeats}
        setStudentDetails={setStudentDetails}
        handleItemSelection={handleItemSelection}
      />
      <EnrolList
        studentDetails={studentDetails}
        setStudentDetails={setStudentDetails}
        selectedItemId={selItemId}
        action={action}
        restoreSeats={restoreSeats}
      />
    </div>
  );
};

export default App;
