import { Link } from "react-router-dom";
import { Movie } from "../../components/Movie/Movie";
import { NominatedMovie } from "../../components/NominatedMovie/NominatedMovie";
import "./Main.css";
import { useLogic } from "./Main.logic";

export const Main = () => {
  const { handleTitleChange, data, isLoading, handleSelectMovie, nominated, setNominated, handleNavigate } =
    useLogic();

  return (
    <div className="main">
      <div className="left">
        <h3 className="shoppies">the shoppies</h3>
        <h2 className="nom">Nominate — </h2>
        <h2 className="cinema">amazing cinema</h2>
        <h3 className="search-text">Search below to nominate your top 5 favorite movies & series.</h3>
        <label htmlFor="title">
          <input
            placeholder="Search movies titles"
            type="text"
            id="title"
            onChange={handleTitleChange}
          />
        </label>

        {Number(nominated?.length) > 4 ? (
          <div className="winner-container">
            <h1>Great Choices!</h1>
            <p>You have reached the 5 film limit.<br></br>
              Remove any film to select a new one.
            </p>
            <button className='reveal-btn' onClick={handleNavigate}>
              Reveal Winner!
            </button>
          </div>
        ) : (
          <div className="movies-list">
            {data?.length ? (
              data?.map((movie) => (
                <Movie
                  key={movie.imdbID}
                  Title={movie.Title}
                  Type={movie.Type}
                  Year={movie.Year}
                  disabled={
                    nominated?.some((item) => item.imdbID === movie.imdbID) ||
                    false
                  }
                  onClick={() => handleSelectMovie(movie)}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      <div className="right">
        <h2 className="nominated-counter">{`Nominated ${nominated?.length || 0}/5`}</h2>
        { nominated?.map((item) => (
            <NominatedMovie 
                id={item.imdbID || '1'}
                index={nominated.indexOf(item) + 1}
                onRemove={() => setNominated((prev) => [...prev?.filter((movie) => movie.imdbID !== item.imdbID) || []])} 
            />
        ))}
      </div>
    </div>
  );
};
