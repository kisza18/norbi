<template>
  <div class="header max-w-7xl mx-auto">
    <div class="mx-10 h-full justify-between">
      <div class="flex-wrap lg:flex lg:flex-nowrap h-full">
        <div
          class="h-1/2 lg:h-full w-full flex flex-col items-center lg:items-start justify-center lg:pb-56"
        >
          <h1
            class="text-6xl text-center lg:text-left font-semibold text-gray-700 mb-3"
          >
            Szőke Norbert
          </h1>
          <h3 class="text-xl mb-5 text-gray-500 uppercase">
            Életmód tanácsadó
          </h3>
          <a
            :href="href"
            @click.prevent="scroll"
            class="btn h-12 py-3 px-7 text-white text-center rounded-md shadow-xl w-48"
          >
            Olvass tovább
          </a>
        </div>

        <div class="h-1/2 lg:h-full w-full flex items-center justify-center">
          <img class="h-full" src="../assets/images/man2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["href"],
  methods: {
    scroll() {
      document.querySelector(this.href).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.header {
  height: 100vh;
  max-height: 1100px;
}
.btn {
  background: #43507c;
}
</style>
