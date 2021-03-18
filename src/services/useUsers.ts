import { ref } from 'vue'
import users from '../services/APIService'

export function useUsers() {

    const userList = ref<User[]>([])
    const userCount = ref(0)

    async function fetchUsers() {
      userList.value = []

    const response = await users.getAll()

        userList.value = response

        userCount.value = response.length
      console.log(userList)
    }

    const { active: usersDownloading, run: runWrappedFetchUsers } = createAsyncProcess(fetchUsers)

    

    return {
        fetchUsers,
        userList,
        userCount
    }
}


import { Ref, ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CreateAsyncProcessReturn<T extends (...args: any[]) => any> {
  active: Ref<boolean>
  run: (...args: Parameters<T>) => Promise<ReturnType<T>>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createAsyncProcess<T extends (...args: any[]) => any> (fn: T): CreateAsyncProcessReturn<T> {
  const active: CreateAsyncProcessReturn<T>['active'] = ref(false)

  const run: CreateAsyncProcessReturn<T>['run'] = async (...args) => {
    active.value = true
    const result = await fn(...args)
    active.value = false
    return result
  }

  return { active, run }
}