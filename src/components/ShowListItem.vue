<template>
        <li>
   <button @click="goToUrl">{{ showDate }}</button> 
   <p>{{ venueName }} - {{ venueLocale }}, {{ show.venueState}} </p>
        </li>
</template>

<script setup lang='ts'>
  import { defineProps } from 'vue'




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
    },
    goToShow: {
        type:Function,
        required: true
    }
  })

  const goToUrl = () => {
      let date = props.showDate.replaceAll('/', '-');
      props.goToShow(date)
  }

  </script>