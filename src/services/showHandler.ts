import { ref } from 'vue'
import API from './APIService'

export function getShows() {

    const showList = ref<Show[]>([])
    const showCount = ref(0)

    async function fetchShows() {
      showList.value = []

    const response = await API.getAll('shows')
        showList.value = response
        showCount.value = response.length

    }

    return {
        fetchShows,
        showList,
        showCount
    }
}

export function getShow() {
    
    const showDetail = ref<Show>()


    async function fetchShow(id: number) {
        let query = id !== undefined ? id : 56;
    const response = await API.getById('shows', query)
        showDetail.value = response

    }

    return {
        fetchShow,
        showDetail
    }
}
