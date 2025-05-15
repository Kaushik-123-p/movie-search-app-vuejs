<template>
  <div class="movie-details max-w-6xl mx-auto p-6 mt-10 bg-white text-gray-900 rounded-xl shadow-lg">
    <div v-if="movie && movie.Title" class="flex flex-col md:flex-row gap-8">
      
      <!-- Poster -->
      <div class="w-full md:w-1/3">
        <img
          :src="movie.Poster !== 'N/A' ? movie.Poster : '/fallback.jpg'"
          alt="Movie Poster"
          class="rounded-lg shadow-md w-full object-cover"
        />
      </div>

      <!-- Movie Info -->
      <div class="flex-1 space-y-4">
        <h2 class="text-3xl font-extrabold text-blue-600">{{ movie.Title }}</h2>
        <p class="text-gray-600 text-lg">{{ movie.Year }} • {{ movie.Genre }} • {{ movie.Runtime }}</p>
        <p class="text-yellow-400 font-semibold">IMDb Rating: {{ movie.imdbRating }}/10</p>
        <p class="text-gray-700 leading-relaxed">{{ movie.Plot }}</p>

        <div class="border-t border-gray-300 pt-4 space-y-2">
          <p><span class="font-bold text-blue-500">Director:</span> {{ movie.Director }}</p>
          <p><span class="font-bold text-blue-500">Writer:</span> {{ movie.Writer }}</p>
          <p><span class="font-bold text-blue-500">Actors:</span> {{ movie.Actors }}</p>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-400 py-10">
      Loading movie details...
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import env from '../env'

const movie = ref({})
const route = useRoute()

onBeforeMount(() => {
  fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
    .then(response => response.json())
    .then(data => {
      movie.value = data
    })
})
</script>
