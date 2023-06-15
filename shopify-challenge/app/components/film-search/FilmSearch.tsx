'use client'

import React, { useState } from 'react'
import SearchBar from '../search-bar/SearchBar'
import SearchedFilms from '../searched-films/SearchedFilms'


export default function FilmSearch() {

    const [searchQuery, setSearchQuery] = useState('')

    return (
        <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <SearchedFilms searchQuery={searchQuery} />
        </>
    )
}
