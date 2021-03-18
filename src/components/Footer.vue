<script lang="ts">
import { useUsers } from '../services/useUsers'

export default {
async setup () {
const { fetchUsers, userList, userCount } = useUsers()


await fetchUsers()
console.log(userList)
return { userList, userCount}
}
}
</script>

<template>
<div>
<div
    v-if="userList.length === 0"
    class="article-preview"
  >
    No articles are here... yet.
  </div>

<ul v-else>
    <li
    v-for="user in userList"
    :key="user.userId"
    >
hello</li>
</ul>
</div>
</template>
