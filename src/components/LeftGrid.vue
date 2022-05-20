<template>
  <div class="section max-w-7xl mx-auto">
    <div class="mx-10 h-full">
      <div class="grid grid-cols-2 gap-10 h-full items-center justify-between">
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
          <div class="content pr-5">
            <h1 class="text-4xl mb-5 text-gray-700">{{ title }}</h1>
            <p class="text-lg text-justify text-gray-500">
              {{ content }}
            </p>
          </div>
        </div>
        <div
          class="w-full h-full relative"
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
            class="image absolute h-full object-cover py-20"
            :src="require(`../assets/images/${imageUrl}`)"
            alt=""
          />
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
.section {
  height: 600px;
}
.image {
  width: 550px;
}
</style>
