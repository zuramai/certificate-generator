<template>
  <div class='landing'>
    <div id="hero" class='min-h-screen'>
      <div class="container mx-auto">
        <div class="flex pt-64">
          <div class="w-full md:w-7/12">
            <h1 class="text-6xl mb-1 font-bold">Making Certificate is That Easy!</h1>
            <p class='text-3xl text-gray-700'>Bulk create and from bunch of names into certificate easily</p>
            <div class="buttons mt-5 flex">
              <nuxt-link to="#" class='text-xl btn-gradient purple text-white px-8 py-2 float-left shadow-xl rounded-xl transform translate-y-0 hover:-translate-y-1 transition duration-200'>Create Now</nuxt-link>
              <nuxt-link to="#" class='text-xl btn-outline-gradient purple text-white px-8 py-2  float-left rounded-xl  ml-4'>See Examples</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
body {
  font-family: 'Niramit';
}
#hero {
  background-image: url('~assets/images/bg/hero.svg');
  background-repeat: no-repeat;
  background-position: top right;
}
</style>