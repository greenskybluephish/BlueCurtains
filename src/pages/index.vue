<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import APIService from '../services/APIService'

    const name = ref('')
    const router = useRouter()

    const getArtists = async () : Promise<Artist[]> => {
     return await APIService.execute("GET", "artists/GetArtistDropdown", "")
    }

    const go = async () => {
      let artists = await getArtists();
      let artistNames = artists.map(a=> a.artistName.toUpperCase())
      if (artistNames.includes(name.value.toUpperCase()))
        router.push(`/artists/${encodeURIComponent(name.value)}`)
     else 
      console.log(artistNames.join())
    }
</script>
<template>
    <div>
    <input
      id="input"
      v-model="name"
      :placeholder="'Search the database...'"
      type="text"
      autocomplete="false"
      class="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
      style="width: 250px"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">Search</label>

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
