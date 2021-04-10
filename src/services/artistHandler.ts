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
        artistCount
    }
}

export function getArtist() {
    
    const artistDetail = ref<Artist>()


    async function fetchArtist(id: number) {
        let query = id !== undefined ? id : 56;
    const response = await API.getById('artists', query)
        artistDetail.value = response

    }

    return {
        fetchArtist,
        artistDetail
    }
}

export function getArtistShow() {
    
    const showDetail = ref<Show>()


    async function fetchShow(id: number, date:Date) {
        let artistId = id !== undefined ? id : 1;
        let query = `${artistId}/${date}`
    const response = await API.getByQuery('artists', query)
        showDetail.value = response

    }

    return {
        fetchShow,
        showDetail
    }
}
