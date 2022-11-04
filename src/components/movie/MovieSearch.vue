<template>
  <div class="container">
    <div class="text-center">
      <input
        class="view"
        type="text"
        v-model="search"
        placeholder="영화 제목을 입력하세요."
      />
      <button class="btn" @click="searchMovie">검색</button>
    </div>
    <br />
    <hr />
    <div>
      <h2>검색 결과</h2>
      <div v-if="movies.length">
        <table class="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>감독</th>
              <th>개봉날짜</th>
              <th>상영시간</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="movie in movies" :key="movie.id">
              <td>{{ movie.id }}</td>
              <td>
                <router-link class="movie-link" :to="`/${movie.id}`">{{
                  movie.title
                }}</router-link>
              </td>
              <td>{{ movie.director }}</td>
              <td>{{ movie.date }}</td>
              <td>{{ movie.runningTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>검색 결과가 없습니다.</div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  name: "MovieSearch",
  data() {
    return {
      search: "",
      movies: [],
    };
  },
  methods: {
    searchMovie() {
      let movieList = JSON.parse(localStorage.getItem("movieList"));
      console.log(this.search);
      this.movies = [];
      for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].title.indexOf(this.search) >= 0) {
          this.movies.push(movieList[i]);
        }
      }
    },
  },
};
</script>
