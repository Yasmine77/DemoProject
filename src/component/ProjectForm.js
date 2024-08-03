import React, { useState } from 'react'; // Import useState
import { Box, Typography } from '@mui/material';
import CustomTable from './customTable'; // Ensure the import path is correct
import ProjectCard from './ProjectCard'; // Ensure the import path is correct
import SubCustomTable from './subCustomTable'; // Ensure the import path is correct
import SubGridButtonBar from './SubGridButtonBar'; // Ensure the import path is correct
import { v4 as uuidv4 } from 'uuid';

// Sample columns and data for the custom tables
const columns1 = [
  { id: 'name', label: 'Name' },
  { id: 'value', label: 'Value' },
];

// Sample data for tables
const data1 = [
  { name: 'Task 1', value: 'Value 1' },
  { name: 'Task 2', value: 'Value 2' },
];

const ProjectForm = () => {
  const [columns2] = useState([
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Description' },
    // Add other columns as needed
  ]);

  const [data2, setData2] = useState([
    { id: 1, name: 'Project 1', description: 'Description 1' },
    // Add other rows as needed
  ]);

  const handleAddRow = () => {
    // Logic to handle adding a row
    const newRow = { id: data2.length + 1, name: '', description: '' }; // Add default values as needed
    setData2([...data2, newRow]);
  };

  const handleEditRow = () => {
    // Logic to handle editing a row
  };

  const handleDeleteRow = () => {
    // Logic to handle deleting a row
    if (data2.length > 0) {
      setData2(data2.slice(0, -1)); // Example: Remove the last row
    }
  };

  const projectData = {
    id:uuidv4(),
    title: '',
    type: '',
    implementationStatus: '',
    regionalStatus: '',
    regionalDialogue: '',
    startYear: '',
    endYear: '',
    contact: '',
    databaseStatus: '',
    totalBudget: '',
    iat: '',
    status: '',
  };

  return (
    <Box>
      <ProjectCard project={projectData} />

      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Table 2
        </Typography>
        <SubCustomTable
          columns={columns2}
          data={data2}
          onAdd={handleAddRow}
          onEdit={handleEditRow}
          onDelete={handleDeleteRow}
        />
        
      </Box>
      
      {/* Add additional tables or components as needed */}
    </Box>
  );
};

export default ProjectForm;
