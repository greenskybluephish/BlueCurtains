<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import createSetlist from '~/services/parseService'
import APIService from '~/services/APIService'
const name = ref('')
const songs = ref('')
const router = useRouter()
const venues = []

const getArtists = async() => {
  return await APIService.execute('GET', 'artists/GetArtistDropdown', '')
}
const go = async() => {
  const artists = await getArtists()
  const artistNames = artists.map((a: { artistName: string }) => a.artistName.toUpperCase())
  if (artistNames.includes(name.value.toUpperCase()))
    router.push(`/artists/${encodeURIComponent(name.value)}`)
  else
    console.log(artistNames.join())
}

const postSetList = (data: any) => {
  const d = document.querySelector('#setlist')
  data.forEach((setObj: any, i: any) => {
    const set = setObj.set
    const list = document.createElement('ol')
    list.textContent = `Set ${i + 1}`

    set.forEach((element: any, int: number) => {
      const song = document.createElement('li')
      song.textContent = `${int + 1}. ${element.songName}`
      list.append(song)
    })

    d.append(list)
  })
}

const parse = () => {
  const songlist = createSetlist(songs.value)
  console.log(songlist)
  postSetList(songlist)
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

  <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
    <label for="parse-setlist" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      Drop Setlists
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <textarea
        id="parse-setlist"
        v-model="songs"
        name="parse-setlist"

        class="max-w-xl shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
      />

      <p class="mt-2 text-sm text-gray-500">
        We'll turn it into a show.
      </p>
    </div>
  </div>
  <div class="pt-5">
    <div class="flex justify-end">
      <button class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="parse">
        Transform
      </button>
    </div>
  </div>

  <DropdownList />
  <div id="setlist" />
</template>
