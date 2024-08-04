import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import ProjectForm from "./ProjectForm"; // Adjust the import path as necessary

const AddProjectModal = ({ open, data, onClose, setData }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle>Add New Project</DialogTitle>
      <DialogContent>
        <ProjectForm
          isEditing={true}
          data={data}
          setData={setData}
          onClose={onClose}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProjectModal;
