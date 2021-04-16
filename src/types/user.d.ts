declare interface Song {
      songId: number 
      songName: string
    songLogin:  string 
     active: boolean 
     songShift?: number 
     songInitials: string 
     emailAddress: string  
     dateLastLogin?: Date 
     songTitle: string  
}

declare interface SongResponse {
    song: Song
}

declare interface SongsResponse {
    songs: Song[]

}