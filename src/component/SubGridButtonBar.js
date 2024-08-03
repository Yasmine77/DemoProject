import React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import GridViewIcon from '@mui/icons-material/GridView';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const SubGridButtonBar = ({ onAdd, onEdit, onDelete, isEditing, showDelete }) => {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Button
        startIcon={<AddIcon />}
        onClick={onAdd}
        
      >
        Add New
      </Button>
    
      <Box ml={1}>
        <Button
          startIcon={<GridViewIcon />}
          onClick={onEdit}
        
          disabled={!isEditing}
        >
           Edit in Grid View
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          onClick={onDelete}
          
          disabled={!showDelete}
          sx={{ marginLeft: 1 }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default SubGridButtonBar;
