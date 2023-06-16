import { getFilmDetails } from '@/app/methods/films'
import { useQueries } from '@tanstack/react-query'
import React from 'react'

export default function NominatedFilms({ nominatedFilmIds, setNominatedFilmIds }: {
    nominatedFilmIds: Array<string>,
    setNominatedFilmIds: React.Dispatch<React.SetStateAction<Array<string>>>
}) {
    const nominatedFilms = useQueries({
        queries: nominatedFilmIds.map((id) => ({
            queryKey: ['filmDetails', id],
            queryFn: () => getFilmDetails(id),
            staleTime: 1000 * 60 * 60 * 24 * 7 // 1 week
        }))
    })
    return (
        <div>
            <p>Nominated Films <span>{nominatedFilmIds.length} / 5</span></p>
            <ul>
                {nominatedFilms.length === 0 && <div>No nominated films</div>}
                {nominatedFilms.map((film) => (
                    <>
                        {film.isLoading && <div>Loading</div>}
                        <li key={film.data?.imdbID}>
                            <div>
                                <img src={film.data?.Poster} alt={film.data?.Title} />
                                <h2>{film.data?.Title}</h2>
                                <p>{film.data?.Year}</p>
                                <button onClick={() => setNominatedFilmIds(nominatedFilmIds.filter((id) => id !== film.data?.imdbID))}>Remove</button>
                            </div>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    )
}
