'use client'
import React, { useState } from 'react'
import SearchBar from '../search-bar/SearchBar'
import SearchedFilms from '../searched-films/SearchedFilms'
import styles from './styles/css/FilmSearch.module.css'

export default function FilmSearch({ nominatedFilmIds, setNominatedFilmIds }:
    {
        nominatedFilmIds: Array<string>
        setNominatedFilmIds: React.Dispatch<React.SetStateAction<Array<string>>>
    }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [queryType, setQueryType] = useState<'movie' | 'series' | 'episode'>('movie')
    return (
        <div className={styles.container}>
            <SearchBar queryType={queryType} setQueryType={setQueryType} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <SearchedFilms showType={queryType} nominatedFilmIds={nominatedFilmIds} setNominatedFilmIds={setNominatedFilmIds} searchQuery={searchQuery} />
        </div>
    )
}
