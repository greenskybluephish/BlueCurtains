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
    showCount,
  }
}

export function getShow() {
  const showDetail = ref<Show>()

  async function fetchShow(id: number) {
    const query = id !== undefined ? id : 56
    const response = await API.getById('shows', query)
    showDetail.value = response
  }

  return {
    fetchShow,
    showDetail,
  }
}

export async function postShow(show: Show): Promise<void> {
  await API.create('shows', show)
}
