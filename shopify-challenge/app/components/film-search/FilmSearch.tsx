'use client'

import React, { useState } from 'react'
import SearchBar from '../search-bar/SearchBar'
import SearchedFilms from '../searched-films/SearchedFilms'


export default function FilmSearch({ nominatedFilmIds, setNominatedFilmIds }:
    {
        nominatedFilmIds: Array<string>
        setNominatedFilmIds: React.Dispatch<React.SetStateAction<Array<string>>>
    }) {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <SearchedFilms nominatedFilmIds={nominatedFilmIds} setNominatedFilmIds={setNominatedFilmIds} searchQuery={searchQuery} />
        </>
    )
}
