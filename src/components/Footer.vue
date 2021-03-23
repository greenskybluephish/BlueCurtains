<template>
<div>
  <div>{{userDetail}}</div>
 <div
    v-if="userList.length === 0"
    class="article-preview"
  >
    No articles are here... yet.
  </div>

<ul >
    <li
    v-for="user in userList"
    :key="user.userId"
    >
{{ user.userName }}</li>
</ul> 
</div>
</template>

<script setup lang="ts">
  import { useUsers, useUser } from '../services/useUsers'
  import { asyncComputed, useTimeoutFn } from '@vueuse/core'
  
   const { fetchUsers, userList, userCount } = useUsers()
  
   const { fetchUser, userDetail } = useUser()

    const userInfo = asyncComputed(
  async() => {
    useTimeoutFn(async () => {
    await fetchUser()
 await fetchUsers() }, 3000)
  },
   null // initial state
 )



   console.log(userList)
  </script>
