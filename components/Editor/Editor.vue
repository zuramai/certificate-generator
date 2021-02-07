<template>
    <div class="editor-wrapper p-5">
        <div class="editor-canvas bg-white shadow-md" :style="templateImageStyle">
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    mounted() {
        console.log(this.templateImageStyle)
    },
    computed: {
        // Get current template image
        ...mapGetters({
            templateImageStyle: 'editor/templateImageStyle'
        }),

    }
}
</script>
<style scoped>
.editor-wrapper {
    margin-left: 20rem;
}
.editor-canvas {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEyIEwgNDggMTIgTSAxMiAwIEwgMTIgNDggTSAwIDI0IEwgNDggMjQgTSAyNCAwIEwgMjQgNDggTSAwIDM2IEwgNDggMzYgTSAzNiAwIEwgMzYgNDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQ4IDAgTCAwIDAgMCA0OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=");
    background-repeat: repeat;
    height: 550px
}
</style>