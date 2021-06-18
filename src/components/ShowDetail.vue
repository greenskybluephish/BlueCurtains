<template>
  <div>
    <h2>{{ show.showDateString }}</h2>
    <p>{{ show.venueName }} - {{ show.venueCity }},{{ show.venueState }} </p>

    <ul>
      <li
        v-for="song in show.setlist"
        :key="song.id"
      >
        {{ song.toString() }}
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  show: {
    type: Object as () => Show,
    required: true,
  },
})

// const goToShow = () => {
//     router.push(`shows/${props.show.artistId}/${props.show.showDateString}`)
// }

</script>
