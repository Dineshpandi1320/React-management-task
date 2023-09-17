import { Button, TextField, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { DataOfStudents } from "./Data";
import { StudentDetails } from "./StudentDetails";
export const StudentList = () => {
  //seting states
  const [students, setstudent] = useState(DataOfStudents);
  const [editId, seteditId] = useState("");
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Place, setPlace] = useState("");
  const [Qualification, setQualification] = useState("");
  const [show, setShow] = useState(true);

  //function for adding
  const addData = () => {
    const newStudents = {
      Id,
      Name,
      Age,
      Gender,
      Place,
      Qualification,
    };
    setstudent([...students, newStudents]);
  };

  //function for deleting data
  const deleteData = (Id) => {
    const removeStud = students.filter((student) => student.Id !== Id);
    setstudent(removeStud);
  };

  //function for edit and updation
  const editData = (Id) => {
    //step 1 selection
    const selected = students.find((student) => student.Id === Id);
    setShow(!show);
    seteditId(Id);
    setId(selected.Id);
    setName(selected.Name);
    setAge(selected.Age);
    setGender(selected.Gender);
    setPlace(selected.Place);
    setQualification(selected.Qualification);
  };

  //updation

  const updateData = () => {
    setShow(!show);
    const editStud = students.findIndex((stud) => stud.Id === editId);
    const updated = {
      Id,
      Name,
      Age,
      Gender,
      Place,
      Qualification,
    };
    students[editStud] = updated;
    setstudent([...students]);
  };
  return (
    <div>
      <Card id="form-card">
        <CardContent className="Text-field">
          <TextField
            label="Enter ID Number"
            onChange={(event) => setId(event.target.value)}
            value={Id}
          />

          <TextField
            label="Enter Your Name"
            onChange={(event) => setName(event.target.value)}
            value={Name}
          />

          <TextField
            label="Enter Age"
            onChange={(event) => setAge(event.target.value)}
            value={Age}
          />

          <TextField
            label="Enter the Gender"
            onChange={(event) => setGender(event.target.value)}
            value={Gender}
          />

          <TextField
            label="Address"
            onChange={(event) => setPlace(event.target.value)}
            value={Place}
          />

          <TextField
            label="Qualification"
            onChange={(event) => setQualification(event.target.value)}
            value={Qualification}
          />

          {show ? (
            <Button
              className="add-btn"
              onClick={() => addData()}
              variant="contained"
              color="success"
            >
              ADD
            </Button>
          ) : (
            <Button
              className="add-btn"
              onClick={() => updateData()}
              variant="contained"
              color="primary"
            >
              UPDATE
            </Button>
          )}
        </CardContent>
      </Card>
      <br />
      <h1 className="details-heading">Student Details</h1>
      <div className="card-container">
        {students.map((stud) => (
          <StudentDetails
            deletedata={deleteData}
            editdata={editData}
            stud={stud}
            key={stud.Id}
          />
        ))}
      </div>
    </div>
  );
};