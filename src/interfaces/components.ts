export interface ChartSong {
    name: string
    imageUrl: string
    artist: string
    url: string
}

export interface ChartSongFromAPIs {
    title: string
    images: {
        coverart: string
    }
    subtitle: string
    url: string
}

export interface ChartSongsResponse {
    tracks: Array<ChartSongFromAPIs>
}
