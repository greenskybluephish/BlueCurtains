declare interface Show {
  showId: number
  venueName: string
  showDateString: string
  artistName: string
  artistId: number
  venueCity: string
  venueState: string
  venueCountry: string
  setlist: IdName[]
}

declare interface ShowResponse {
  Show: Show
}

declare interface ShowsResponse {
  Shows: Show[]
  ShowsCount: number
}

declare interface DropdownListItem {
  id: number
  name: string
}
