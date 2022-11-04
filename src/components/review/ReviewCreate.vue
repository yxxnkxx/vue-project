<template>
  <div class="container">
    <h3>리뷰 등록</h3>
    <fieldset class="text-center">
      <label for="writer">작성자</label>
      <input type="text" id="writer" v-model="writer" class="view" /><br />
      <label for="content">내용</label>
      <textarea
        type="text"
        id="content"
        v-model="content"
        class="view"
      ></textarea>
      <br />
      <div id="star-container" class="d-flex justify-content-center">
        <div style="width: 50%">
          <b-form-rating v-model="value" variant="warning"></b-form-rating>
          <p class="mt-2">Value: {{ value }}</p>
        </div>
      </div>
      <button class="btn btn-primary" @click="regist">등록</button>
    </fieldset>
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
  name: "ReviewCreate",
  props: {
    movieId: {
      type: Number,
    },
  },

  data() {
    return {
      writer: "",
      content: "",
      value: null,
    };
  },

  methods: {
    setRating(rating) {
      this.rating = rating;
    },

    regist() {
      if (this.writer === "" || this.content === "") {
        alert("모든 내용을 입력해주세요");
        return;
      }
      console.log(this.movieId);

      let review = {
        movieId: this.movieId,
        reviewId: this.reviewId,
        writer: this.writer,
        content: this.content,
        star: this.value,
      };

      this.$emit("create-review", review);
    },
  },
};
</script>

<style>
div {
  text-align: center;
}
</style>
