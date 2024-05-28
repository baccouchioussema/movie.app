// src/components/MovieCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import '../styles.css'; // Assurez-vous d'ajuster le chemin selon l'emplacement réel de styles.css



const MovieCard = ({ movie, onDelete }) => {
  return (
    <Card className="movie-card">
      <CardMedia component="img" alt={movie.title} height="300" image={movie.poster} />
      <CardContent className="movie-card-content">
        <Typography gutterBottom variant="h5" component="div" className="movie-card-title">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="movie-card-description">
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" onClick={() => onDelete(movie.title)}>
          Supprimer
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;

