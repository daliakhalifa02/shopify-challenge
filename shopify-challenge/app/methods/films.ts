import api from "./api"

export async function searchFilms(movieTitle: string) {

    const response = await api.get<MovieSearchResponse>('', {
        params: {
            s: movieTitle,
            type: 'movie'
        }
    })
    return response.data
}