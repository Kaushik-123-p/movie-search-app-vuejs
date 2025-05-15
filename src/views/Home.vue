<template>
    <div class="home">
        
        <div class="feature-card relative">
            <router-link to="/movie/c5e99942">
               
                <div class="w-full aspect-[16/9] overflow-hidden shadow-lg">
                    <img src="../assets//images//naruto.webp" alt="Image" class="w-full h-full object-cover" />
                </div>
                
                <div class="details absolute left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] z-10 p-4">
                    <h3 class="text-white mb-4">Naruto</h3>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repudiandae esse itaque, dolores iure saepe sapiente delectus laborum provident corporis?!</p>
                </div>

            </router-link>
        </div>

        <form @submit.prevent="searchMovies()" class="search-box flex flex-col justify-center items-center p-4">
            <input 
                type="text" 
                placeholder="What are you looking for?" 
                class="block appearance-none border-none outline-none bg-none text-white w-full bg-gray-600 text-xl px-2 py-2 rounded-md mb-4 transition-all placeholder:text-white focus:shadow-md focus:shadow-gray-500"
                v-model="search"
            >
            <input 
                type="submit" 
                value="search" 
                class="block appearance-none border-none outline-none bg-none w-full max-w-[300px] bg-green-500 p-2 rounded-md text-white text-xl uppercase transition-all active:bg-green-400"
            >
        </form>

        <!-- Movie List -->
        <div class="movie-list flex flex-wrap -mx-2 my-2">
            <div 
                class="movie w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4" 
                v-for="movie in movies" 
                :key="movie.imdbID"
            >
                <router-link :to="'/movie/' + movie.imdbID" class="movie-link flex flex-col h-full bg-gray-800 rounded overflow-hidden shadow">
                    <div class="product-image relative block h-[275px]">
                        <img 
                        :src="movie.Poster !== 'N/A' ? movie.Poster : 'fallback.jpg'" 
                        alt="Movie Poster" 
                        class="w-full h-full object-cover"
                        />
                        <div class="type absolute py-1 px-3 bg-green-600 text-white text-sm bottom-2 left-2 rounded capitalize">
                            {{ movie.Type }}
                        </div>
                    </div>
                    <div class="details p-4">
                        <p class="text-gray-400 text-sm mb-1">{{ movie.Year }}</p>
                        <h3 class="text-white font-bold text-lg leading-snug">{{ movie.Title }}</h3>
                    </div>
                </router-link>
            </div>

            <div v-if="movies.length === 0" class="w-full text-center text-gray-400 py-10">
                No movies found or waiting for search.
            </div>
        </div>


    </div> 
</template>

<script setup>
    import {ref} from 'vue'
    import env from '../env'

    const search = ref("")
    const movies = ref([])

    const searchMovies = () => {
        if(search.value !== ""){
            // console.log(search.value);
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    movies.value = data.Search || []
                    search.value = ""
                    // console.log(movies.value);
                }) 
        }

    }
</script>

