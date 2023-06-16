import React, { useState } from 'react'
import { searchFilms } from '../../methods/films'
import { useQuery } from '@tanstack/react-query'
import styles from './style/css/searched-films.module.css'
export default function SearchedFilms({ searchQuery, setNominatedFilmIds, nominatedFilmIds }:
    {
        searchQuery: string,
        setNominatedFilmIds: React.Dispatch<React.SetStateAction<Array<string>>>,
        nominatedFilmIds: Array<string>
    }) {

    function handleNominate(imdbID: string) {
        if (nominatedFilmIds.length >= 5) return
        if (nominatedFilmIds.includes(imdbID)) return
        setNominatedFilmIds([...nominatedFilmIds, imdbID])
    }

    if (searchQuery.length < 2) return (<div>Search for a movie, tv show, person...</div>)

    const { data, isLoading, error } = useQuery({
        queryKey: ['filmQuery', searchQuery],
        queryFn: () => searchFilms(searchQuery),
        staleTime: 1000 * 60 * 60 * 24 * 7 // 1 week
    })

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Something went wrong...</div>

    if (data?.Response === "False") return (<div>No results found</div>)

    return (
        <div>
            <p>Movie Results for {searchQuery}</p>
            <ul>
                {data?.Search?.filter((film) => film.Poster !== "N/A").map((film: MovieSearch) => (
                    <li key={film.imdbID}>
                        <div className={styles["searched-film"]}>
                            <img className={styles["searched-film__poster"]} src={film.Poster} alt="" />
                            <div className='searched-film__info'>
                                <h2 className='searched-film__title'>
                                    {film.Title}
                                </h2>
                                <p className='searched-film__year-type'>
                                    {film.Year} - {film.Type}
                                </p>
                                <button disabled={
                                    nominatedFilmIds.length >= 5 ||
                                    nominatedFilmIds.includes(film.imdbID)
                                } onClick={() => handleNominate(film.imdbID)} className='searched-film__nominate-btn'>
                                    Nominate
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
