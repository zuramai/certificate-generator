<template>
    <div id="creator">
        <div class="container mx-auto mt-24">
            <div class="header text-center">
                <h1 class='text-gray-800 text-5xl font-bold'>Creator Studio</h1>
                <p class='text-gray-600'><i>Creator Studio</i> adalah tempat untuk membuat sertifikat dengan mudah</p>
            </div>
            <div class="content mt-24">
                <div class="step mb-32">
                    <vs-tooltip text="Tooltip position Top" position="top" >
                        <h3 class="step-header text-2xl font-bold text-gray-800">
                            Langkah 1: Upload atau pilih tema yang tersedia
                        </h3>
                    </vs-tooltip>
                    <div class="step-content pl-8 pt-5">
                        <vs-button border size="large" >
                            <font-awesome-icon :icon="['fas', 'upload']"  />
                            <span class='ml-3'>Upload</span>
                        </vs-button>
                        <p class='my-5 text-xl text-gray-700'>ATAU</p>
                        <a href="#" class='text-blue-700 hover:text-blue-500'>Pilih Template <font-awesome-icon  :icon="['fas', 'chevron-right']"  /></a>
                        <ChooseTemplate/>
                    </div>
                </div>
                <div class="step">
                    <h3 class="step-header text-2xl font-bold text-gray-800">
                        Langkah 2: Edit tema
                    </h3>
                    <div class="step-content">
                        <Editor/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ChooseTemplate from '~/components/ChooseTemplate.vue';
import Editor from '~/components/Editor/Editor.vue'

export default {
    components: {
        ChooseTemplate, Editor
    },
    data: () => ({
        choose_template_open: false
    })
}
</script>
<style lang="scss">
@import "@/assets/scss/pages/creator.scss";
</style>