<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex-col text-center mx-32 py-32">
      <div class="price_header">
        <h1
          class="text-4xl mb-10 text-gray-700"
          v-motion
          :initial="{
            opacity: 0,
            y: 50,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 300,
              duration: 500,
            },
          }"
        >
          Kurzusok és árak
        </h1>
        <p
          class="text-lg text-center text-gray-500"
          v-motion
          :initial="{
            opacity: 0,
            y: 50,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 350,
              duration: 500,
            },
          }"
        >
          Személyes találkozásra a VI. kerületben van lehetőség időpont
          foglalással, természetesen online is elérhető vagyok, de ezt csak
          később ajánlott több személyes találkozás után
        </p>
      </div>
      <div
        class="container grid grid-cols-2 gap-10 mx-auto pt-20"
        v-motion
        :initial="{
          opacity: 0,
          y: 50,
        }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400,
            duration: 500,
          },
        }"
      >
        <div class="grid_left text-left p-10">
          <div class="flex items justify-between">
            <h1 class="text-lg text-gray-700">Rövid kurzus</h1>
            <h1 class="text-lg text-gray-700">10 000 Ft</h1>
          </div>
          <div>
            <p class="text-md text-gray-500 font-thin">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="grid_right text-left p-10">
          <div class="flex items justify-between">
            <h1 class="text-lg text-gray-700">Hosszú kurzus</h1>
            <h1 class="text-lg text-gray-700">20 000 Ft</h1>
          </div>
          <div>
            <p class="text-md text-gray-500 font-thin">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
