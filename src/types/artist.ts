import { Show } from './show'

export interface IdName {
  id: number
  name: string
}
export interface Artist {
  artistId: number
  artistName: string
  originalSongs: IdName[]
  shows: Show[]
}
export interface ArtistResponse {
  artist: Artist
}

export interface ArtistsResponse {
  artists: Artist[]
}
