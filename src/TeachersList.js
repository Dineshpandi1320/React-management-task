import { Button, TextField, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { TeachersDetails } from "./TeachersDetails";
import { teachersData } from "./teachersData";
export const ListOfTeachers = () => {
  //seting states
  const [teachers, setTeacher] = useState(teachersData);
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
    const newTeacher = {
      Id,
      Name,
      Age,
      Gender,
      Place,
      Qualification,
    };
    setTeacher([...teachers, newTeacher]);
  };

  //function for deleting data
  const deleteData = (Id) => {
    const removeTeacher = teachers.filter((teacher) => teacher.Id !== Id);
    setTeacher(removeTeacher);
  };

  //function for edit and updation
  const editData = (Id) => {
    //step 1 selection
    const selected = teachers.find((teacher) => teacher.Id === Id);
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
    const editTeacher = teachers.findIndex((stud) => stud.Id === editId);
    const updated = {
      Id,
      Name,
      Age,
      Gender,
      Place,
      Qualification,
    };
    teachers[editTeacher] = updated;
    setTeacher([...teachers]);
  };
  return (
    <div>
      <Card id="form-card">
        <CardContent className="Text-field">
          <TextField
            label="Enter Mentor ID Number"
            onChange={(event) => setId(event.target.value)}
            value={Id}
          />

          <TextField
            label="Enter Mentor Name"
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
      <h1 className="details-heading">Mentor Details</h1>
      <div className="card-container">
        {teachers.map((teacher) => (
          <TeachersDetails
            deletedata={deleteData}
            editdata={editData}
            teacher={teacher}
            key={teacher.Id}
          />
        ))}
      </div>
    </div>
  );
};