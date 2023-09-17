import {
    Card,
    CardActions,
    CardContent,
    Typography,
    IconButton,
  } from "@mui/material";
  import React from "react";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  
  export function StudentDetails({ stud, editdata, deletedata }) {
    return (
      <Card sx={{ maxWidth: 345 }} id="details-card">
        <CardContent className="card-comp">
          <Typography gutterBottom variant="h5" component="div">
            Name : {stud.Name}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            Age : {stud.Age}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            Gender : {stud.Gender}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            Address : {stud.Place}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            Qualification : {stud.Qualification}
          </Typography>
        </CardContent>
        <CardActions className="Cardactions">
          <IconButton
            aria-label="edit"
            onClick={() => editdata(stud.Id)}
            variant="contained"
            color="secondary"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            className="delete-btn"
            aria-label="delete"
            onClick={() => deletedata(stud.Id)}
            variant="contained"
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }