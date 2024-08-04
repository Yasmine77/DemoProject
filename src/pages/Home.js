import React ,{useState}from 'react';
import CustomTable from '../component/customTable';
import ContactCard from '../component/contactCard';
import { Box, Container } from '@mui/material';


const columns = [
  { id: 'selected', label: '' },
  { id: 'id', label: '#' },
  { id: 'title', label: 'Title' },
  { id: 'type', label: 'Type' },
  { id: 'implementationStatus', label: 'Implementation Status' },
  { id: 'regionalDialogue', label: 'Regional Dialogue' },
  { id: 'startYear', label: 'Start Year' },
  { id: 'endYear', label: 'End Year' },
  { id: 'contact', label: 'Contact' },
  { id: 'databaseStatus', label: 'Database Status' },
  { id: 'totalBudget', label: 'Total Budget' },
  { id: 'iat', label: 'IAT' },
  { id: 'status', label: 'Status' },
];

const contact = {
  image: 'https://via.placeholder.com/100', // Replace with actual image URL
  name: 'User',
  telephone: 'Contact Telephone',
  email: 'contact.email@example.com',
  department: 'Contact Department',
  institution: 'Contact Institution',
};



const HomePage = () => {
  let dataArray = [
    { id: 1, title: 'Project A', type: 'Type 1', implementationStatus: 'Ongoing', regionalDialogue: 'Yes', startYear: 2020, endYear: 2023, contact: 'John Doe', databaseStatus: 'Active', totalBudget: '$1M', iat: 'N/A', status: 'In Progress' },
    { id: 2, title: 'Project B', type: 'Type 2', implementationStatus: 'Completed', regionalDialogue: 'No', startYear: 2019, endYear: 2021, contact: 'Jane Smith', databaseStatus: 'Inactive', totalBudget: '$500K', iat: 'N/A', status: 'Finished' },
    // Add more data here
  ];
  const [data, setData] = useState(dataArray); 
  return (
    <Container maxWidth={false} disableGutters>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={8}>
        <ContactCard contact={contact} />
      </Box>
      <Box mt={4} width="100%" sx={{ overflowX: 'auto' }}>
        <CustomTable columns={columns} data={data} setData={setData} />
      </Box>
    </Container>
  );
};

export default HomePage;
