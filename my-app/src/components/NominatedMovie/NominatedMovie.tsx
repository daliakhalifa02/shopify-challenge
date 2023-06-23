import { useQuery } from "react-query";
import "./NominatedMovie.css";
import axios from "axios";
import { INominatedMovie, NominatedMovieProps } from "./NominatedMovie.types";
import "./NominatedMovie.css";

export const NominatedMovie = ({ id, index, onRemove }: NominatedMovieProps) => {
  const { data, isLoading } = useQuery<INominatedMovie>(
    ["nominated-movie", id],
    () =>
      axios
        .get(`http://www.omdbapi.com/?i=${id}&apikey=3d85689c`)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
  );

  return data ? (
    <div className="nominated-movie-container">
      <div className="nominated-movie">
        <h1 className="movie-index">{index}</h1>
        <img src={data?.Poster} className="poster" alt={data?.Title} />
        <div className="info">
          <h2 style={{ margin: 0 }}>{data?.Title}</h2>
          <div className="meta-data">
            {`${data?.imdbRating} . ${data?.Released}`}
          </div>
          <div className="genres">{data?.Genre}</div>
        </div>
      </div>
      <div>
        <button className="remove-btn" onClick={onRemove}>x</button>
      </div>
    </div>
  ) : (
    <></>
  );
};
