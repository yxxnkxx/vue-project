<template>
  <div class="container">
    <h2>영화 등록</h2>
    <fieldset class="text-center">
      <label for="id">아이디</label>
      <input type="number" id="id" v-model="id" class="view" /><br />
      <label for="title">영화 제목</label>
      <input type="title" id="title" v-model="title" class="view" /><br />
      <label for="director">감독</label>
      <input type="text" id="director" v-model="director" class="view" /><br />
      <label for="date">개봉날짜</label>
      <input type="date" id="date" v-model="date" class="view" /><br />
      <label for="runningTime">상영시간</label>
      <input
        type="number"
        id="runningTime"
        v-model="runningTime"
        class="view"
      /><br />
      <button class="btn btn-primary" @click="regist">등록</button>
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "MovieCreate",
  data() {
    return {
      id: "",
      title: "",
      director: "",
      date: "",
      runningTime: 0,
    };
  },
  methods: {
    regist() {
      if (
        this.id === "" ||
        this.title === "" ||
        this.director === "" ||
        this.date === ""
      ) {
        alert("모든 내용을 입력해주세요");
        return;
      }

      let movieList = JSON.parse(localStorage.getItem("movieList"));
      for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].id == this.id) {
          alert("아이디 중복");
          return;
        }
      }

      let movie = {
        id: this.id,
        title: this.title,
        director: this.director,
        date: this.date,
        runningTime: this.runningTime,
        reviews: [],
      };

      this.$emit("create-movie", movie);
    },
  },
};
</script>
