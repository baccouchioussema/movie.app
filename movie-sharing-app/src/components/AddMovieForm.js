// src/components/AddMovieForm.js
import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import '../styles.css';

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, description, poster });
    setTitle('');
    setDescription('');
    setPoster('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="URL de l'affiche"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Ajouter le film
      </Button>
    </Box>
  );
};

export default AddMovieForm;

