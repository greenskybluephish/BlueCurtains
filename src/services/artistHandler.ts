import { ref } from 'vue'
import API from './APIService'

export function getArtists() {
  const artistList = ref<Artist[]>([])
  const artistCount = ref(0)

  async function fetchArtists() {
    artistList.value = []

    const response = await API.getAll('artists')
    artistList.value = response
    artistCount.value = response.length
  }

  return {
    fetchArtists,
    artistList,
    artistCount,
  }
}

export function getArtist() {
  const artistDetail = ref<Artist>()

  async function fetchArtist(id: number) {
    const query = id !== undefined ? id : 1
    const response = await API.getById('artists', query)
    artistDetail.value = response
  }

  return {
    fetchArtist,
    artistDetail,
  }
}

export function getArtistShow() {
  const showDetail = ref<Show>()

  async function fetchShow(artist: number | string, date: string | Date) {
    const query = `${artist}/${date}`
    const response = await API.getByQuery('artists', query)
    showDetail.value = response
  }

  return {
    fetchShow,
    showDetail,
  }
}
