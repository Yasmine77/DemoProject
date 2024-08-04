import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  Input,
} from "@mui/material";
import CustomChip from "./CustomChip";

const ProjectCard = ({ project, isEditingProject, setData, onClose }) => {
  const [isEditing, setIsEditing] = useState(isEditingProject || false);
  const [projectValues, setProjectValues] = useState(project);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectValues((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
    setUploadedFileName(e.target.files[0].name);
  };

  const handleSave = () => {
    setData((prev) => [...prev, projectValues]);

    // Implement save logic here, including handling the uploaded file
    // Simulate save logic with a delay
    setTimeout(() => {
      setIsEditing(false);
      onClose()
    }, 1000);
  };

  const handleCancel = () => {
    setProjectValues(project);
    // setIsEditing(false);
  };

  return (
    <Card sx={{ padding: 2, mb: 2, position: "relative" }}>
      <CardContent>
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle2" mr={1}>
            Status:
          </Typography>

          {project.status ? (
            <CustomChip label={projectValues.status} tag="status" />
          ) : (
            ""
          )}
        </Box>

        <Typography variant="h6" mb={2}>
          Project Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <strong>Title:</strong>
              {isEditing ? (
                <TextField
                  name="title"
                  value={projectValues.title}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              ) : (
                projectValues.title
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <Box display="flex" alignItems="center">
                <strong>Type:</strong>
                <Box ml={1}>
                  {isEditing ? (
                    <TextField
                      name="type"
                      value={projectValues.type}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                    />
                  ) : (
                    <CustomChip label={projectValues.type} tag="type" />
                  )}
                </Box>
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <Box display="flex" alignItems="center">
                <strong>Implementation Status:</strong>
                <Box ml={1}>
                  {isEditing ? (
                    <TextField
                      name="implementationStatus"
                      value={projectValues.implementationStatus}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                    />
                  ) : (
                    <CustomChip
                      label={projectValues.implementationStatus}
                      tag="implementationStatus"
                    />
                  )}
                </Box>
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <Box display="flex" alignItems="center">
                <strong>Regional Status:</strong>
                <Box ml={1}>
                  {isEditing ? (
                    <TextField
                      name="regionalStatus"
                      value={projectValues.regionalStatus}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                    />
                  ) : (
                    <CustomChip
                      label={projectValues.regionalStatus}
                      tag="regionalStatus"
                    />
                  )}
                </Box>
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <Box display="flex" alignItems="center">
                <strong>Regional Dialogue:</strong>
                <Box ml={1}>
                  {isEditing ? (
                    <TextField
                      name="regionalDialogue"
                      value={projectValues.regionalDialogue}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                    />
                  ) : (
                    <CustomChip
                      label={projectValues.regionalDialogue}
                      tag="regionalDialogue"
                    />
                  )}
                </Box>
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <strong>Start Year:</strong>
              {isEditing ? (
                <TextField
                  name="startYear"
                  value={projectValues.startYear}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              ) : (
                projectValues.startYear
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <strong>End Year:</strong>
              {isEditing ? (
                <TextField
                  name="endYear"
                  value={projectValues.endYear}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              ) : (
                projectValues.endYear
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <strong>Contact:</strong>
              {isEditing ? (
                <TextField
                  name="contact"
                  value={projectValues.contact}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              ) : (
                projectValues.contact
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <Box display="flex" alignItems="center">
                <strong>Database Status:</strong>
                <Box ml={1}>
                  {isEditing ? (
                    <TextField
                      name="databaseStatus"
                      value={projectValues.databaseStatus}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                    />
                  ) : (
                    <CustomChip
                      label={projectValues.databaseStatus}
                      tag="databaseStatus"
                    />
                  )}
                </Box>
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <strong>Total Budget:</strong>
              {isEditing ? (
                <TextField
                  name="totalBudget"
                  value={projectValues.totalBudget}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              ) : (
                projectValues.totalBudget
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <strong>IAT:</strong>
              {isEditing ? (
                <TextField
                  name="iat"
                  value={projectValues.iat}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              ) : (
                projectValues.iat
              )}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">
              <strong>Upload File:</strong>
              <Input
                type="file"
                onChange={handleFileChange}
                fullWidth
                size="small"
              />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">
              <strong>Comment:</strong>
              {isEditing ? (
                <TextField
                  name="comment"
                  value={projectValues.comment || ""}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                />
              ) : (
                projectValues.comment
              )}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          {isEditing ? (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ mr: 1 }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    implementationStatus: PropTypes.string.isRequired,
    regionalStatus: PropTypes.string.isRequired,
    regionalDialogue: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    databaseStatus: PropTypes.string.isRequired,
    totalBudget: PropTypes.string.isRequired,
    iat: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
