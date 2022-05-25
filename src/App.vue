<template>
  <div>
    <div class="headers bg-gray-50 pt-2 lg:pt-14">
      <TheHeader />
    </div>
    <div>
      <AboutSection />
    </div>
    <div class="bg-gray-50">
      <div>
        <LeftGrid
          title="Genetikai jellemzők"
          content="Egy ember testfelépítéséből számtalan belső tulajdonságra, életcélra, 
jó és rossz tulajdonságra, illetve táplálkozási szokásra lehet következtetni. 
Csak egy pár példát hagy említsek. Széleskörben elterjedt meglátás, 
hogy a nagydarab emberek mindig kedvesebbek és toleránsabbak embertársaikkal 
szemben ez valójában egy genetikai jellemző. Nézzünk most egy kicsit kevésbé 
elterjedt jellemzőt például tudta, hogy azok a férfiak, akik erősen kopaszodnak 
nagy valószínűséggel laktóz érzékenyek, még egy magas vékony ember soha nem lesz 
laktóz érzékeny. Az ételérzékenységek nagy része az emésztés sebességével függ össze, 
ami az előbb említett példa szerint is jól kivehető a külső testfelépítésünkből"
          imageUrl="1.png"
        />
      </div>
    </div>
    <div>
      <div>
        <RightGrid
          title="Miben különbözöm más terapeutáktól"
          content="Ember alatt egy elég erősen összetett rendszert értünk, amit nem lehet külön
darabokban vizsgálni. Számomra megdöbbentő volt, hogy akiknél jártam
terapeutáknál sablonos programok alapján kezeltek, voltak check pointok
amiken végig mentük de valójában csak találgattak. Mindegyikük azzal akart
orvosolni, ami a szakterülete volt, amihez egyébként értettek is de én egy
probléma csokrot vittem, amit akár életnek is nevezhetünk. Aztán valahogy
mindig a terapeuta medrében maradtunk, próbáltam át csalogatni a sajátomba
kérdezgettem, hogy ez miért van az miért van, de elég kiforratlan
válaszokat kaptam. Nagyon hiányzott az az érzés, hogy az én életemről
legyen szó ne csak álltalános elvekről. Aztán addig kerestem kutattam a
válaszokat, hogy végül egy olyan terapeutává váltam, aki már nem keresi,
hanem adja a válaszokat"
          imageUrl="2.png"
        />
      </div>
    </div>
    <div class="bg-gray-50">
      <div>
        <LeftGrid
          title="Az ominózus brit tudósok"
          content="Mikor teljesen összezavarodik a TV-től, hogy az egyik évben azt halja egy ételről, 
hogy teljesen egészséges rá kétévvel később kijön, hogy halálos méreg és 
teljesen összezavarodik, hogy önt megvezették akkor jusson eszébe, 
hogy valójában egy összetett mondat két részét mutatták meg önnek időben eltolva. 
Mert a teljes mondat valójában így szól: egy adott étel egy adott genetikai 
csoportba tartozó ember számára gyógyír míg a csoporton kívül esők számára méreg"
          imageUrl="3.png"
        />
      </div>
    </div>
    <div>
      <div>
        <RightGrid
          title="Miben lehetek a segítségére"
          content="Segíthetek önnek megoldást keresni lelki gondjaira és az ezekkel szorosan összefüggő 
testi problémáira és függőségeire a bemutatkozóban ismertetetett jellemzők figyelembevételével.
Számtalan történet tudok mesélni önnek az élet összefüggéseiről, amikből 
felépítheti a saját igazságait, kaphat egy új perspektívát tőlem és elindulhat egy új úton. 
A kedvenc témáim a gyermek nevelés és a válás utáni újrakezdés, de az élet többi 
területén is otthonosan mozgok. Amiben viszont nem tudok segíteni a gyász és annak feldolgozása, 
ha ilyen kihívással néz szembe kérem válasszon mást mert ebben a témakörben nem tudok érdemi segítséget nyújtani"
          imageUrl="4.png"
        />
      </div>
    </div>
    <div class="bg-gray-50">
      <PriceSection />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import LeftGrid from "./components/LeftGrid.vue";
import RightGrid from "./components/RightGrid.vue";
import PriceSection from "./components/PriceSection.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheHeader,
    AboutSection,
    LeftGrid,
    PriceSection,
    RightGrid,
  },
};
</script>

<style scoped>
* {
  font-family: "Raleway", sans-serif;
}
.headers {
  background-image: url("./assets/images/wave.png");
  background-repeat: no-repeat;
  background-position: center bottom;
}
</style>
