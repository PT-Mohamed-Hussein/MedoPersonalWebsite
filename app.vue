<script setup>
useHead({
  htmlAttrs:{
    class: 'dark'
  }
});
</script>

<template>
  <div class=" antialiased font-body">
    <TheHero />
    <AboutMe />
    <Reviews />
    <Footer />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  @apply bg-primary-1

}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-secondary-main hover:bg-opacity-70 duration-300 ease-in-out transition-all
}

</style>