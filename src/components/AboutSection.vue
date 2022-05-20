<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex-col text-center mx-32 py-32">
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
        Bemutatkozás
      </h1>
      <p
        class="text-lg text-gray-500"
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
        Üdvözlöm a kedves idelátogatót. Szőke Norbert vagyok életmód tanácsadó?!
        Mondjuk. Bár nem szeretem ezt a kifejezést, hagy fejtsem ki. Egy olyan
        terapeutaként végzem a munkámat, aki az embert teljes egészében
        vizsgálja. A módszerem az illető problémájának a körbejárása
        pszichológia, életmód és a genetikai jellemzők alapján. Melyből a
        legfontosabb talán a genetikai jellemzők figyelembevétele hiszen mind a
        külső mind a belső tulajdonságainkat ezek a jellemzők determinálják.
      </p>
    </div>
  </div>
</template>
