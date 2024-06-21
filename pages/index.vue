<template>
  <main>
    <Introduction />
    <ChangeColorMode />
    <div class="container">
      <AboutMe />
      <Experience />
      <Services />
      <Contact />
    </div>
  </main>
</template>

<script>
import Introduction from "~/components/Introduction.vue";
import AboutMe from "~/components/AboutMe.vue";
import Experience from "~/components/Experience.vue";
import Contact from "../components/Contact.vue";
import Services from "../components/Services.vue";
import ChangeColorMode from "../components/ChangeColorMode.vue";
export default {
  components: {
    Introduction,
    ChangeColorMode,
    AboutMe,
    Experience,
    Services,
    Contact,
  },
};
</script>

<style>
</style>
