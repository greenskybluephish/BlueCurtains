<template>
        <li>
   <button @click="goToShow">{{ showDate }}</button> 
   <p>{{ venueName }} - {{ venueLocale }}, {{ show.venueState}} </p>
        </li>
</template>

<script setup lang='ts'>
  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router'

    const router = useRouter()



  const props = defineProps({
    show: {
      type: Object as () => Show,
      required: true
    },
    showDate: {
        type: String,
        required:true
    },
    venueName: {
        type: String
    },
    venueLocale: {
        type: String
    }
  })

  const goToShow = () => {
        router.push(`shows/${props.show.artistId}/${encodeURIComponent(props.showDate)}`)
    }

  </script>