declare interface IdName {
  id: number
  name: string
}
declare interface Artist {
  artistId: number
  artistName: string
  originalSongs: IdName[]
  shows: Show[]
}
declare interface ArtistResponse {
  artist: Artist
}

declare interface ArtistsResponse {
  artists: Artist[]
}
