declare interface Artist {
    artistId: number 
    artistName: string
  artistLogin:  string 
   active: boolean 
   artistShift?: number 
   artistInitials: string 
   emailAddress: string  
   dateLastLogin?: Date 
   artistTitle: string  
}

declare interface ArtistResponse {
  artist: artist
}

declare interface ArtistsResponse {
  artists: artist[]
  artistsCount: number
}