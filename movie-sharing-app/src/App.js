// src/App.js
import React, { useState } from 'react';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import AppNavbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import './styles.css';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const searchMovies = (query) => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const deleteMovie = (title) => {
    const updatedMovies = movies.filter((movie) => movie.title !== title);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <>
      <AppNavbar />
      <Container>
        <h1 className="my-4">Partage de Films</h1>
        <AddMovieForm onAddMovie={addMovie} />
        <MovieSearch onSearch={searchMovies} />
        <MovieList movies={filteredMovies} onDelete={deleteMovie} />
      </Container>
    </>
  );
};

export default App;





