export interface Song {
  songId: number
  songName: string
  songLogin: string
  active: boolean
  songShift?: number
  songInitials: string
  emailAddress: string
  dateLastLogin?: Date
  songTitle: string
}

export interface SongResponse {
  song: Song
}

export interface SongsResponse {
  songs: Song[]

}
