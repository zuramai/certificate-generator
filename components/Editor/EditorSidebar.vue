<template>
    <div id="editor-sidebar" class="h-screen bg-white mt-16 shadow-lg fixed">
        <div class="sidebar-title px-8 py-4 font-bold  ">
            Menu
        </div>
        <collapse>
            <template v-slot:name>Templates</template>
            <template v-slot:content>
                <editor-sidebar-template :src="require(`@/assets/images/templates/${template.src}`)" :key="index" v-for="(template,index) in $store.state.editor.templates" :name="template.name"/>
            </template>
        </collapse>
        <div class="sidebar-title px-8 py-4 font-bold  ">
            Data
        </div>
        <collapse :open="true">
            <template v-slot:name>Insert</template>
            <template v-slot:content>
                <div class="flex">
                    <div class="w-1/2">
                        <nx-button-light class='flex items-center w-full text-center' @click="addElement('text')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4396e2" class="bi bi-type" viewBox="0 0 16 16">
                                <path d="M2.244 13.081l.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
                            </svg>
                            <span class='ml-2'>Text</span>
                        </nx-button-light>
                    </div>
                </div>
            </template>
        </collapse>
    </div>
</template>
<script>
export default {
    methods: {
        addElement(what) {
            this.$store.dispatch('editor/addElement', what);
        }
    }
}
</script>
<style scoped>
#editor-sidebar {
    width: 20rem;
}
</style>