import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import ProjectForm from './ProjectForm'; // Adjust the import path as necessary

const EditProjectModal = ({ open, onClose, project }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle>Edit Project</DialogTitle>
      <DialogContent>
        {/* Pass the project details to the ProjectForm */}
        <ProjectForm initialData={project} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProjectModal;
