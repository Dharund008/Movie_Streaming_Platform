import React from "react";
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Movie from "./pages/movie";
import Player from "./pages/Player";
import MoviesList from "./pages/MoviesList";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";
export default function App()
{
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="player" element={<Player />} />
      <Route exact path="/moviesList" element={<MoviesList />} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/mylist" element={<UserLiked />} />
      <Route exact path="/" element={<Movie />} />
    </Routes>
    </BrowserRouter>
  )
}
