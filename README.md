# 🎬 Vue Movies - Movie Search App

Welcome to **VueMovies**, a movie search application built with [Vue 3](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), and the [OMDb API](https://www.omdbapi.com/). This app allows users to search for movies and view detailed information about each title.

Live Preview: **[Coming Soon or add your deployment link]**

## 🔗 GitHub Repository

[👉 View on GitHub](https://github.com/Kaushik-123-p/movie-search-app-vuejs)

---

## 📸 Preview

![screenshot](./src//assets//Movie-app-Screenshot%20.png)

---

## ✨ Features

- 🔍 Search movies using the OMDb API
- 📄 View movie details (poster, plot, ratings, actors, etc.)
- 🔁 Dynamic routing with Vue Router
- 📱 Responsive and modern UI with Tailwind CSS
- 🔥 Highlighted feature card (e.g., Naruto)

---

## 🚀 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) for fast development build
- [OMDb API](https://www.omdbapi.com/) for movie data

---

## 📁 Project Structure

movie-search-app-vuejs/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── router/
│ ├── views/
│ ├── App.vue
│ ├── main.js
├── env.js
├── index.html
├── tailwind.config.js
└── package.json

---

## 🔑 OMDb API Key

You need an API key from [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

1. Create a file called `env.js` inside the `src/` directory:
   ```js
   export default {
     apikey: "your_omdb_api_key"
   }
   Replace "your_omdb_api_key" with your actual API key.
   ```

🛠️ Installation & Setup

Clone the repository
git clone https://github.com/Kaushik-123-p/movie-search-app-vuejs.git
cd movie-search-app-vuejs

Install dependencies
npm install

Run the app
npm run dev

Open in browser: http://localhost:5173

🧩 Components Overview
Home.vue: Contains search functionality and movie cards

MovieDetail.vue: Shows detailed movie information

Router: Handles navigation between home and detail views

🧪 Future Improvements
Add loading spinners and error handling

Add pagination or infinite scroll

Add search by genre/year

Dark/light mode toggle

🧑‍💻 Author
Kaushik

GitHub: Kaushik-123-p

🌐 Live Demo
🔗 https://movie-search-app-vuejs.vercel.app/
