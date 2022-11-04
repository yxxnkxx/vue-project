<template>
  <div class="container">
    <hr />
    <h3>리뷰 목록</h3>
    <h4>등록된 리뷰의 수 : {{ reviewCnt }}</h4>
    <div v-if="reviews.length">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">리뷰</th>
            <th scope="col">작성자</th>
            <th scope="col" style="width: 20%">별점</th>
            <th scope="col">삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(review, index) in reviews" :key="index">
            <td>{{ review.content }}</td>
            <td>{{ review.writer }}</td>
            <div>
              <b-form-rating
                v-bind:value="review.star"
                variant="warning"
                readonly
              ></b-form-rating>
            </div>
            <td>
              <button
                class="btn btn-primary"
                @click="deleteReview(review.reviewId)"
              >
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>등록된 리뷰가 없습니다.</div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export default {
  name: "ReviewList",
  props: {
    reviews: {
      type: Array,
    },
  },

  methods: {
    deleteReview(reviewId) {
      console.log(reviewId);
      this.$emit("delete-review", reviewId);
    },
  },
  computed: {
    reviewCnt() {
      return this.reviews.length;
    },
  },
};
</script>
