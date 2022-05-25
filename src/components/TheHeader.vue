<template>
  <div class="header max-w-7xl mx-auto">
    <div class="mx-10 h-full justify-between">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
        <div
          class="content lg:h-full text-center lg:text-left lg:flex items-center -mt-40 lg:-mt-32"
        >
          <div class="text pt-4">
            <h1 class="text-6xl font-semibold text-gray-700 mb-3">
              Szőke Norbert
            </h1>
            <h3 class="text-xl mb-5 text-gray-500 uppercase">
              Életmód tanácsadó
            </h3>
            <button class="btn h-12 py-3 px-7 text-white rounded-md shadow-xl">
              Olvass tovább
            </button>
          </div>
        </div>
        <div class="content h-full flex items-center text-center">
          <div class="w-full h-full relative">
            <img
              class="absolute h-full lg:right-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="../assets/images/man2.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 100vh;
  max-height: 870px;
}
.btn {
  background: #43507c;
}
</style>
