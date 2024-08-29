import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Tooltip } from '@mui/material';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('Please fill in both fields before submitting.');
    } else {
      setSubmittedName(`${firstName} ${lastName}`);
      setError('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">
        Full Name Display
      </Typography>
      <form onSubmit={handleSubmit}>
        <Tooltip
          title={firstName.trim() === '' ? 'Fill out this field' : ''}
          placement="right"
          open={firstName.trim() === ''}
        >
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={firstName.trim() === ''}
          />
        </Tooltip>
        <Tooltip
          title={lastName.trim() === '' ? 'Fill out this field' : ''}
          placement="right"
          open={lastName.trim() === ''}
        >
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={lastName.trim() === ''}
          />
        </Tooltip>
        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
      {submittedName && (
        <Typography variant="h5" color="textPrimary" style={{ marginTop: '20px' }}>
          Full Name: {submittedName}
        </Typography>
      )}
    </Container>
  );
}

export default App;
