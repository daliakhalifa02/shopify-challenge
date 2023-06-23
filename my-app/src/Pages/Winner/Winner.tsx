import { useEffect, useState } from "react";
import { INominatedMovie } from "../../components/NominatedMovie/NominatedMovie.types";
import { NominatedMovie } from "../../components/NominatedMovie/NominatedMovie";
import { useCookies } from "react-cookie";
import './Winner.css';
export const Winner = () => {
  const [cookie] = useCookies(['movies']);
  const [winner, setWinner] = useState<INominatedMovie | null>(null);
  const [movies, setMovies] = useState<INominatedMovie[]>()

  useEffect(() => {
    if (movies) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setWinner(movies[randomIndex]);
    }
  }, [movies]);
  
  useEffect(() => {
    setMovies(cookie.movies)
  }, [cookie]);

  return winner ? (
    <div>
      <h1>Winner</h1>
      <NominatedMovie
        id={winner.imdbID}
        index={1}
        onRemove={() => {}}
      />
    </div>
  ) : (
    <p>No nominated movies found.</p>
  )}
;
