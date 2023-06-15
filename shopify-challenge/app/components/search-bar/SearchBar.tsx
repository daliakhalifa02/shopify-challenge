import React from 'react'
import stlyes from './style/css/search-bar.module.css'
export default function SearchBar({ searchQuery, setSearchQuery }: {
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}) {
    return (
        <form action="">
            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                name="search"
                id="search"
                placeholder="Search for a movie, tv show, person..." />
        </form>
    )
}
