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
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SubGridButtonBar from './SubGridButtonBar'; // Ensure the import path is correct

const SubCustomTable = ({ columns, data, onAdd, onEdit, onDelete }) => {
  const [rows, setRows] = useState(data);
  const [selectedRows, setSelectedRows] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [newRow, setNewRow] = useState(null);

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
      setSelectedRows(rows.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleAddRow = () => {
    setNewRow({});
    setEditingRow(rows.length); // New row will be added at the end
  };

  const handleChangeNewRow = (event) => {
    const { name, value } = event.target;
    setNewRow((prevNewRow) => ({ ...prevNewRow, [name]: value }));
  };

  const handleSaveNewRow = () => {
    if (newRow && Object.keys(newRow).length > 0) {
      setRows([...rows, { ...newRow, id: rows.length + 1 }]);
      setNewRow(null);
      setEditingRow(null);
      if (onAdd) onAdd();
    }
  };

  const handleCancelNewRow = () => {
    setNewRow(null);
    setEditingRow(null);
  };

  const handleChangeEditRow = (index, event) => {
    const { name, value } = event.target;
    setRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index ? { ...row, [name]: value } : row
      )
    );
  };

  const handleEditRow = (index) => {
    setEditingRow(index);
    if (onEdit) onEdit();
  };

  const handleSaveEdit = () => {
    setEditingRow(null);
  };

  const handleDeleteSelected = () => {
    const updatedRows = rows.filter((_, index) => !selectedRows.includes(index));
    setRows(updatedRows);
    setSelectedRows([]);
    if (onDelete) onDelete();
  };

  return (
    <Box>
      <SubGridButtonBar
        onAdd={handleAddRow}
        onEdit={() => {
          if (selectedRows.length === 1) {
            handleEditRow(selectedRows[0]);
          }
        }}
        onDelete={handleDeleteSelected}
        isEditing={selectedRows.length === 1 || newRow !== null} // Enable edit if exactly one row is selected or a new row is being edited
        showDelete={selectedRows.length > 0} // Show delete button if any row is selected
      />
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: '#f5fbff' }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedRows.length > 0 && selectedRows.length < rows.length
                  }
                  checked={selectedRows.length === rows.length}
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
            {[...rows, ...(newRow ? [newRow] : [])].map((row, index) => (
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
                  <TableCell key={column.id}>
                    {(index === rows.length && newRow) ? ( // New row editing
                      <TextField
                        name={column.id}
                        value={newRow[column.id] || ''}
                        onChange={handleChangeNewRow}
                      />
                    ) : (
                      (editingRow === index ? (
                        <TextField
                          name={column.id}
                          value={row[column.id] || ''}
                          onChange={(event) => handleChangeEditRow(index, event)}
                        />
                      ) : (
                        row[column.id]
                      ))
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  {(index === rows.length && newRow) ? ( // New row action buttons
                    <>
                      <Button onClick={handleSaveNewRow}>Save</Button>
                      <Button onClick={handleCancelNewRow}>Cancel</Button>
                    </>
                  ) : (
                    (editingRow === index ? (
                      <>
                        <Button onClick={handleSaveEdit}>Save</Button>
                        <Button onClick={() => setEditingRow(null)}>Cancel</Button>
                      </>
                    ) : (
                      null // No action buttons needed here
                    ))
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SubCustomTable;
