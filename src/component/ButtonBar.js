import React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import GridViewIcon from '@mui/icons-material/GridView';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ButtonBar = ({ selectedRows = [], handleAdd, handleEdit, handleDelete }) => {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Button startIcon={<AddIcon />} onClick={handleAdd}>
        Add new Project
      </Button>
      {selectedRows.length === 1 && (
        <Button startIcon={<GridViewIcon />} onClick={handleEdit}>
        Edit in grid view

        </Button>
      )}
      {selectedRows.length > 0 && (
        <Button startIcon={<DeleteIcon />} onClick={handleDelete}>
          Delete
        </Button>
      )}
    </Box>
  );
};

export default ButtonBar;
