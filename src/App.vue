<template>
  <div class="bg-gray-900 w-full min-h-screen">
    <header class="flex items-center justify-center px-4 py-4 bg-gray-800 shadow-sm shadow-gray-900">
      <router-link to="/">
        <h1 class="text-white text-5xl"><span class="text-blue-500 font-extrabold">Vue</span>Movies</h1>
      </router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>

</script>
