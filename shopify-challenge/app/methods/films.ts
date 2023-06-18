import api from "./api"

export async function searchFilms(movieTitle: string) {
    if (movieTitle) {
        const response = await api.get<MovieSearchResponse>('', {
            params: {
                s: movieTitle,
                type: 'movie'
            }
        })
        return response.data
    }
}

export async function getFilmDetails(imdbID: string) {
    const response = await api.get<any>('', {
        params: {
            i: imdbID,
            type: 'movie'
        }
    })
    return response.data
}

