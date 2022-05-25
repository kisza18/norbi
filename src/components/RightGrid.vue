<template>
  <div class="section max-w-7xl mx-auto py-20">
    <div class="mx-10 h-full">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full items-center justify-between"
      >
        <div
          class="w-full h-full lg:relative order-1 lg:order-none"
          v-motion
          :initial="{
            opacity: 0,
          }"
          :visibleOnce="{
            opacity: 1,
            transition: {
              delay: 300,
              duration: 500,
            },
          }"
        >
          <img
            class="image lg:absolute h-full object-cover"
            :src="require(`../assets/images/${imageUrl}`)"
            alt=""
          />
        </div>
        <div
          class="w-full"
          v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 200,
              duration: 500,
            },
          }"
        >
          <div class="content lg:pr-5">
            <h1 class="text-4xl mb-5 text-gray-700">{{ title }}</h1>
            <p class="text-lg text-justify text-gray-500">
              {{ content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "imageUrl"],
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .section {
    height: 600px;
  }
  .image {
    width: 550px;
  }
}
</style>
