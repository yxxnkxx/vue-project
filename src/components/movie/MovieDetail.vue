<template>
  <div class="container">
    <h2>영화 정보</h2>
    <img :src="movie.imgSrc" />
    <fieldset class="text-center">
      <label for="id">아이디</label>
      <input
        readonly
        type="text"
        id="id"
        v-model="movie.id"
        class="view"
      /><br />
      <label for="title">제목</label>
      <input type="title" id="title" v-model="movie.title" class="view" /><br />
      <label for="director">감독</label>
      <input
        type="text"
        id="director"
        v-model="movie.director"
        class="view"
      /><br />
      <label for="date">개봉날짜</label>
      <input type="date" id="date" v-model="movie.date" class="view" /><br />
      <label for="runningTime">상영시간</label>
      <input
        type="number"
        id="runningTime"
        v-model="movie.runningTime"
        class="view"
      /><br />
      <button class="btn btn-primary" @click="updateMovie">수정</button>
      <button class="btn btn-danger" @click="deleteMovie">삭제</button>
    </fieldset>

    <router-view :reviews="reviews" @delete-review="deleteReview"></router-view>
    <hr />
    <review-create
      :movieId="movie.id"
      @create-review="createReview"
    ></review-create>
  </div>
</template>
<script>
import reviewJson from "../../assets/reviews.json";
import ReviewCreate from "../review/ReviewCreate.vue";

export default {
  components: { ReviewCreate },
  name: "MovieDetail",
  data() {
    return {
      movie: {
        id: "",
        title: "",
        director: "",
        date: "",
        runningTime: 0,
        imgSrc: "",
      },
      reviews: [],
      totalReview: reviewJson,
    };
  },
  methods: {
    createReview(review) {
      let totalReviews = JSON.parse(localStorage.getItem("reviewList"));
      let lastIdx = totalReviews[totalReviews.length - 1].reviewId;
      review.reviewId = lastIdx + 1;
      console.log(review.reviewId);

      if (totalReviews) {
        totalReviews.push(review);
      } else {
        totalReviews = [];
        totalReviews.push(review);
      }

      localStorage.setItem("reviewList", JSON.stringify(totalReviews));
      alert("리뷰 등록 완료");
      this.getTotalReviews();
      this.getReviewList();
    },

    getTotalReviews() {
      let reviewList = JSON.parse(localStorage.getItem("reviewList"));
      if (reviewList) {
        this.totalReview = reviewList;
      } else {
        localStorage.setItem("reviewList", JSON.stringify(this.totalReview));
      }
    },

    getReviewList() {
      this.reviews = [];
      for (let i = 0; i < this.totalReview.length; i++) {
        if (this.totalReview[i].movieId == this.movie.id) {
          this.reviews.push(this.totalReview[i]);
        }
      }
    },

    deleteReview(id) {
      let reviewList = JSON.parse(localStorage.getItem("reviewList"));
      console.log(id);
      for (let i = 0; i < reviewList.length; i++) {
        if (reviewList[i].reviewId == id) {
          reviewList.splice(i, 1);
          alert("삭제 완료");
          break;
        }
      }

      localStorage.setItem("reviewList", JSON.stringify(reviewList));
      this.getTotalReviews();
      this.getReviewList();
    },
    updateMovie() {
      this.$emit("update-movie", this.movie);
    },

    deleteMovie() {
      this.$emit("delete-movie", this.movie);
    },
  },

  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const id = pathName[pathName.length - 1];
    // localStorage에서 carList 저장된 자동차 목록을 얻어온 후 JSON객체로 parsing한다.
    let movieList = JSON.parse(localStorage.getItem("movieList"));
    for (let i = 0; i < movieList.length; i++) {
      if (movieList[i].id == id) {
        this.movie = movieList[i];
        break;
      }
    }
    this.getTotalReviews();
    this.getReviewList();
  },
};
</script>

<style>
img {
  width: 200px;
}
</style>
