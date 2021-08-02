export interface ChartSongsResponse {
    tracks: Array<ChartSongFromAPIs>
}

export interface ChartSongFromAPIs {
    title: string
    images: {
        coverart: string
    }
    subtitle: string
    url: string
}

export interface SearchResponse {
    response: {
        hits: Array<SearchedSong>
    }
}

export interface SearchedSong {
    result: {
        title: string
        primary_artist: {
            name: string
        }
        header_image_url: string
        url: string
    }
}
