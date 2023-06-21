type MovieSearchResponse = {
    Search?: MovieSearch[],
    totalResults?: string,
    Response: string,
    Error?: string
}


type MovieSearch = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}