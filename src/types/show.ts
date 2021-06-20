import { IdName } from './artist'

export interface Show {
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

export interface ShowResponse {
  Show: Show
}

export interface ShowsResponse {
  Shows: Show[]
  ShowsCount: number
}

export interface DropdownListItem {
  id: number
  name: string
}
