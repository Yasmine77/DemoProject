import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Avatar, Grid, Typography, Link } from '@mui/material';

const ContactCard = ({ contact }) => {
  if (!contact) {
    return <div>No contact information provided</div>;
  }

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
      <Avatar
        sx={{ width: 100, height: 100, marginRight: 2 }}
        src={contact.image}
        alt={contact.name}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">{contact.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{contact.telephone}</Typography>
            <Link href={`mailto:${contact.email}`} variant="body2">
              {contact.email}
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{contact.department}</Typography>
            <Typography variant="body2">{contact.institution}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    telephone: PropTypes.string,
    email: PropTypes.string,
    department: PropTypes.string,
    institution: PropTypes.string,
  }),
};

ContactCard.defaultProps = {
  contact: {
    image: 'https://via.placeholder.com/100',
    name: 'Unknown Name',
    telephone: 'Unknown Telephone',
    email: 'unknown.email@example.com',
    department: 'Unknown Department',
    institution: 'Unknown Institution',
  },
};

export default ContactCard;
