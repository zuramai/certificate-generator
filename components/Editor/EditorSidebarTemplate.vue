<template>
    <div class='template my-3 relative' @mouseenter="hover=true" @mouseleave="hover=false">
        <div class="template-img-wrapper shadow-sm border border-gray-300 rounded-lg" >
            <img :src="src" :alt="name" class='rounded-lg'>
        </div>
        <transition name="opacity">
            <div v-show="hover"  class="template-overlay  absolute w-full h-full rounded-lg bg-gray-700 top-0 left-0 right-0"></div>
        </transition>
        <transition name="opacity">
            <div v-show="hover"  class="absolute p-5 flex-col justify-end w-full h-full flex items-start top-0 left-0 right-0">
                <h6 class='text-white mb-2'>{{name}}</h6>
                <nx-button color="primary" size="sm" @click="chooseTemplate">Choose</nx-button>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props: {
        src: {
            required: true
        },
        name: {
            required: true
        },
    },
    data: () => ({
        hover: false
    }),
    methods: {
        chooseTemplate() {
            this.$store.dispatch('editor/chooseTemplate', {
                src: this.src,
                name: this.name,
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.template-overlay {
    opacity: .8;
}
</style>