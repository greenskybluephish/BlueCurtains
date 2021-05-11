<script setup lang="ts">
import { asyncComputed } from '@vueuse/core'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { getArtist } from '../../services/artistHandler'

const router = useRouter()

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const { fetchArtist, artistDetail } = getArtist()

asyncComputed(
  async() => {
    await fetchArtist(1)
  },
)

const goToShow = (showUrl: string) => {
  const route = `/shows/${props.name}/${showUrl}`
  console.log(route)
  router.push(route)
}

</script>

<template>
  <div>
    <div
      v-if="artistDetail?.shows.length === 0"
      class="article-preview"
    >
      No shows created. Would you like to add one?
    </div>

    <ul>
      <ShowListItem
        v-for="(item,index) in artistDetail?.shows"
        :key="item.showId"
        :item="item"
        :index="index"
        :show="item"
        :show-date="item.showDateString"
        :venue-name="item.venueName"
        :venue-locale="item.venueCity"
        :go-to-show="goToShow"
      />
    </ul>
  </div>
</template>
