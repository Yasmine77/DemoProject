// CustomChip.js
import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';
import { styled } from '@mui/system';

// Define color schemes for different tags
const tagColors = {
  implementationStatus: { backgroundColor: '#c1f1c0', textColor: '#888e88' },
  regionalStatus: { backgroundColor: '#faf0f2', textColor: '#db5b7b' },
  regionalDialogue: { backgroundColor: '#d9ebff', textColor: '#88c1ff' },
  databaseStatus: { backgroundColor: '#faf0f2', textColor: '#fbcd97' },
  status: { backgroundColor: '#FBC02D', textColor: '#FFFFFF' },
  type: { backgroundColor: '#616161', textColor: '#FFFFFF' },
};

// Create a styled Chip component
const StyledChip = styled(Chip)(({ theme, tag }) => ({
  backgroundColor: tagColors[tag]?.backgroundColor || theme.palette.grey[300],
  color: tagColors[tag]?.textColor || theme.palette.text.primary,
}));

const CustomChip = ({ label, tag }) => {
  return <StyledChip label={label} tag={tag} />;
};

CustomChip.propTypes = {
  label: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(Object.keys(tagColors)),
};

export default CustomChip;
