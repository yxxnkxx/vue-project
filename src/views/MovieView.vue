<template>
  <div>
    <router-view
      :movies="movies"
      @create-movie="createMovie"
      @update-movie="updateMovie"
      @delete-movie="deleteMovie"
    />
  </div>
</template>

<script>
import movieJson from "../assets/movies.json";

export default {
  name: "MovieVue",
  data() {
    return {
      movies: movieJson,
    };
  },
  methods: {
    getMovieList() {
      let movieList = JSON.parse(localStorage.getItem("movieList"));
      if (movieList) {
        this.movies = movieList;
      } else {
        localStorage.setItem("movieList", JSON.stringify(this.movies));
      }
    },
    createMovie(movie) {
      let movieList = JSON.parse(localStorage.getItem("movieList"));

      if (movieList) {
        movieList.push(movie);
      } else {
        movieList = [];
        movieList.push(movie);
      }

      localStorage.setItem("movieList", JSON.stringify(movieList));
      localStorage.setItem(movie.id, "");
      alert("등록 완료");
      this.getMovieList(); // 이거 없으니까 추가가 안됨
      this.$router.push("/movie");
    },
    updateMovie(movie) {
      let movieList = JSON.parse(localStorage.getItem("movieList"));

      for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].id == movie.id) {
          this.$set(movieList, i, movie);
          alert("수정 완료");
          break;
        }
      }
      localStorage.setItem("movieList", JSON.stringify(movieList));
      this.getMovieList();
      this.$router.push("/movie");
    },
    deleteMovie(movie) {
      let movieList = JSON.parse(localStorage.getItem("movieList"));

      for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].id == movie.id) {
          movieList.splice(i, 1);
          alert("삭제 완료");
          break;
        }
      }

      localStorage.setItem("movieList", JSON.stringify(movieList));
      this.getMovieList();
      this.$router.push("/movie");
    },
  },
  created() {
    this.getMovieList();
  },
};
</script>

<style>
.movie-link {
  color: black;
}

.view {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}

label {
  display: inline-block;
  width: 130px;
}

/* 테이블 CSS */
.movie-list {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  margin: auto;
}

.movie-list td,
.movie-list th {
  border: 1px solid black;
}
</style>
