import React, { useState } from 'react';
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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonBar from './ButtonBar'; // Adjust the import path as necessary
import AddProjectModal from './AddProjectModal'; // Adjust the import path as necessary


const CustomTable = ({ columns, data ,setData}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [newProjectForm, setNewProjectForm] = useState();

  const handleSelectRow = (index) => {
    const newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(index)) {
      newSelectedRows.splice(newSelectedRows.indexOf(index), 1);
    } else {
      newSelectedRows.push(index);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(data.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleDeleteSelected = () => {
    // Handle deletion of selected rows
    console.log('Delete selected rows:', selectedRows);
    setSelectedRows([]);
  };

  const handleAdd = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filteredData = data.filter(row =>
    columns.some(column =>
      row[column.id]?.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <Box>
      <ButtonBar
        selectedRows={selectedRows}
        handleAdd={handleAdd}
        handleEdit={() => console.log('Edit selected row')}
        handleDelete={handleDeleteSelected}
        handleGridView={() => console.log('Edit in grid view')}
      />
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: '#f5fbff' }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedRows.length > 0 && selectedRows.length < filteredData.length
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
                    checked={selectedRows.includes(index)}
                    onChange={() => handleSelectRow(index)}
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
      <AddProjectModal open={modalOpen} onClose={handleCloseModal}  setNewProjectForm={setNewProjectForm} />
    </Box>
  );
};

export default CustomTable;
