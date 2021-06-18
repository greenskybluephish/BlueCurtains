import { ref } from 'vue'
import API from './APIService'

export async function getArtists() {

    const artistList = ref<Artist[]>([]);
    artistList.value = await API.getAll('artists')
    return artistList;
}

export function getArtist() {
    
    const artistDetail = ref<Artist>()


    async function fetchArtist(id: number = 1) {

    const response = await API.getById('artists', id)
        artistDetail.value = response

    }

    return {
        fetchArtist,
        artistDetail
    }
}

export function getArtistShow() {
    const showDetail = ref<Show>()
    async function fetchShow(artist: number | string, date:Date) {
        let query = `${artist}/${date}`
    const response = await API.getByQuery('artists', query)
        showDetail.value = response

    }

    return {
        fetchShow,
        showDetail
    }
}
