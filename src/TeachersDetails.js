import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    IconButton,
  } from "@mui/material";
  import React from "react";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  
  export function TeachersDetails({ teacher, editdata, deletedata }) {
    return (
      <Card sx={{ maxWidth: 345 }} id="details-card">
        <CardContent className="card-comp">
          <Typography gutterBottom variant="h5" component="div">
            Name : {teacher.Name}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            Age : {teacher.Age}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            Gender : {teacher.Gender}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            Address : {teacher.Place}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            Qualification : {teacher.Qualification}
          </Typography>
        </CardContent>
        <CardActions className="Cardactions">
          <IconButton
            aria-label="edit"
            onClick={() => editdata(teacher.Id)}
            variant="contained"
            color="secondary"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            className="delete-btn"
            aria-label="delete"
            onClick={() => deletedata(teacher.Id)}
            variant="contained"
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }