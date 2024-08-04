import React, { useState } from "react"; // Import useState
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard"; // Ensure the import path is correct
import SubCustomTable from "./subCustomTable"; // Ensure the import path is correct

const ProjectForm = ({ isEditing, data, setData, onClose, initialData }) => {
  const [columns2] = useState([
    { id: "name", label: "Name" },
    { id: "description", label: "Description" },
    // Add other columns as needed
  ]);

  const [data2, setData2] = useState([
    { id: 1, name: "Project 1", description: "Description 1" },
    // Add other rows as needed
  ]);
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
    id: initialData?.id || data?.length + 1,
    title: initialData?.title || "",
    type: initialData?.type || "",
    implementationStatus: initialData?.implementationStatus || "",
    regionalStatus: initialData?.regionalStatus || "",
    regionalDialogue: initialData?.regionalDialogue || "",
    startYear: initialData?.startYear || "",
    endYear: initialData?.endYear || "",
    contact: initialData?.contact || "",
    databaseStatus: initialData?.databaseStatus || "",
    totalBudget: initialData?.totalBudget || "",
    iat: initialData?.iat || "",
    status: initialData?.status || "",
  };

  const handleAddRow = () => {
    // Logic to handle adding a row
  };

  return (
    <Box>
      <ProjectCard
        project={projectData}
        isEditingProject={isEditing}
        setData={setData}
        onClose={onClose}
      />

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
