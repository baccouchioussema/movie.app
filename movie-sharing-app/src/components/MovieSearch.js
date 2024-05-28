// src/components/MovieSearch.js
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import '../styles.css';

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextField
      label="Rechercher un film"
      value={query}
      onChange={handleSearch}
      fullWidth
      margin="normal"
      className="mb-4"
    />
  );
};

export default MovieSearch;

