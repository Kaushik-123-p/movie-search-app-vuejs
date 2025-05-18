<template>
  <div class="home bg-gray-900 min-h-screen text-white">
  
    <div class="feature-card relative max-w-7xl mx-auto overflow-hidden rounded-lg shadow-xl mt-6">
    <router-link to="/movie/naruto" class="block">
        <div class="w-full h-96">
          <img src="../assets/images/naruto.webp" alt="naruro" class="w-full h-full object-cover" />
        </div>
        <div class="details absolute left-0 right-0 bottom-0 bg-gradient-to-t from-gray-800/80 to-transparent p-6 flex flex-col justify-end">
          <h3 class="text-white text-3xl font-bold mb-2">Naruto</h3>
          <p class="text-white max-w-2xl text-sm">
           An epic anime adventure following Naruto Uzumaki on his journey to become the strongest ninja, facing powerful enemies and uncovering the secrets of his past.
          </p>
        </div>
      </router-link>
    </div>

    
    <form @submit.prevent="searchMovies()" class="search-box flex flex-col items-center p-6 max-w-2xl mx-auto">
      <input 
        type="text" 
        placeholder="Search for a movie..." 
        class="w-full bg-gray-800 text-white text-xl px-4 py-3 rounded-md mb-4 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition"
        v-model="search"
      />
      <input 
        type="submit" 
        value="Search" 
        class="w-full max-w-xs bg-blue-600 hover:bg-blue-700 p-3 rounded-md text-white text-xl font-semibold uppercase transition"
      />
    </form>

    <!-- Movie Cards -->
    <div class="movie-list flex flex-wrap gap-6 justify-center px-4 pb-10">
      <div 
        v-for="movie in movies" 
        :key="movie.imdbID" 
        class="movie w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs"
      >
        <router-link :to="'/movie/' + movie.imdbID" class="block bg-gray-800 rounded-lg overflow-hidden shadow-md transition hover:scale-105 duration-200">
          <div class="relative h-[275px]">
            <img 
              :src="movie.Poster !== 'N/A' ? movie.Poster : '../assets/images/images.png'" 
              alt="Movie Poster" 
              class="w-full h-full object-cover"
            />

            <span class="absolute bottom-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded shadow">
              {{ movie.Type }}
            </span>
          </div>
          <div class="p-4 text-white">
            <p class="text-gray-400 text-sm">{{ movie.Year }}</p>
            <h3 class="text-lg font-semibold line-clamp-2">{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>

      <div v-if="movies.length === 0" class="w-full text-center text-gray-400 mt-10">
        No movies found or waiting for search.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import env from '../env'

const search = ref("")
const movies = ref([])

const searchMovies = () => {
  if (search.value !== "") {
    fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
      .then(res => res.json())
      .then(data => {
        movies.value = data.Search || []
        search.value = ""
      })
  }
}
</script>
