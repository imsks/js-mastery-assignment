export interface ChartSongsResponse {
    tracks: Array<ChartSongFromAPIs>
}

export interface ChartSongFromAPIs {
    title: string
    images: {
        coverart: string
    }
    subtitle: string
    hub: {
        actions: Array<ChartSongFromAPIsAction>
    }
    url: string
}

interface ChartSongFromAPIsAction {
    name: string
    uri?: string
}

export interface SearchResponse {
    tracks: {
        hits: Array<SearchedSong>
    }
}

export interface SearchedSong {
    track: {
        title: string
        images: {
            coverart: string
        }
        subtitle: string
        hub: {
            actions: Array<ChartSongFromAPIsAction>
        }
        url: string
    }
}
