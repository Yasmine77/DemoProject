import React ,{useState}from 'react';
import CustomTable from '../component/customTable';
import ContactCard from '../component/contactCard';
import { Box, Container } from '@mui/material';


const columns = [
  { id: 'selected', label: '' },
  { id: 'ID', label: '#' },
  { id: 'Title', label: 'Title' },
  { id: 'Type', label: 'Type' },
  { id: 'Implementation Status', label: 'Implementation Status' },
  { id: 'Regional Dialogue', label: 'Regional Dialogue' },
  { id: 'Start Year', label: 'Start Year' },
  { id: 'End Year', label: 'End Year' },
  { id: 'Contact', label: 'Contact' },
  { id: 'Database Status', label: 'Database Status' },
  { id: 'Total Budget', label: 'Total Budget' },
  { id: 'IAT', label: 'IAT' },
  { id: 'Status', label: 'Status' },
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
    { ID: 1, Title: 'Project A', Type: 'Type 1', 'Implementation Status': 'Ongoing', 'Regional Dialogue': 'Yes', 'Start Year': 2020, 'End Year': 2023, Contact: 'John Doe', 'Database Status': 'Active', 'Total Budget': '$1M', IAT: 'N/A', Status: 'In Progress' },
    { ID: 2, Title: 'Project B', Type: 'Type 2', 'Implementation Status': 'Completed', 'Regional Dialogue': 'No', 'Start Year': 2019, 'End Year': 2021, Contact: 'Jane Smith', 'Database Status': 'Inactive', 'Total Budget': '$500K', IAT: 'N/A', Status: 'Finished' },
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
