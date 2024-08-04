import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Box,
  Button,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ButtonBar from "./ButtonBar"; // Adjust the import path as necessary
import AddProjectModal from "./AddProjectModal"; // Adjust the import path as necessary
import EditProjectModal from "./EditProjectModal";

const CustomTable = ({ columns, data, setData }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [filterText, setFilterText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newProjectForm, setNewProjectForm] = useState();

  const handleSelectRow = (index) => {
    console.log({ index });
    const newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(index)) {
      newSelectedRows.splice(newSelectedRows.indexOf(index), 1);
    } else {
      newSelectedRows.push(index);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAll = (event) => {
    console.log({ event });

    if (event.target.checked) {
      setSelectedRows(data.map((el) => el.id));
    } else {
      setSelectedRows([]);
    }
  };

  useEffect(() => {
    setSelectedProject(data.find((el) => el?.id === selectedRows?.[0]));
  }, [data, selectedRows]);

  const handleDeleteSelected = () => {
    // Handle deletion of selected rows
    console.log("Delete selected rows:", selectedRows);
    setSelectedRows([]);
  };

  const handleAdd = () => {
    setModalOpen(true);
  };

  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filteredData = data.filter((row) =>
    columns.some((column) =>
      row[column.id]
        ?.toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
    )
  );

  return (
    <Box>
      <ButtonBar
        selectedRows={selectedRows}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        handleDelete={handleDeleteSelected}
        handleGridView={() => console.log("Edit in grid view")}
      />
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: "#f5fbff" }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedRows.length > 0 &&
                    selectedRows.length < filteredData.length
                  }
                  checked={selectedRows.length === filteredData.length}
                  onChange={handleSelectAll}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Project Modal */}
      <AddProjectModal
        data={data}
        open={modalOpen}
        onClose={handleCloseModal}
        setData={setData}
      />

      {/* Edit Project Modal */}
      <EditProjectModal
        data={data}
        selectedProject={selectedProject}
        open={modalOpen}
        onClose={handleCloseModal}
        setData={setData}
      />
    </Box>
  );
};

export default CustomTable;
