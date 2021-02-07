<template>
    <div id="editor-sidebar" class="h-screen bg-white shadow-lg fixed">
        <div class="sidebar-title px-8 py-4 font-bold text-indigo-700 ">
            Menu
        </div>
        <collapse>
            <template v-slot:name>Templates</template>
            <template v-slot:content>
                <editor-sidebar-template :src="require(`@/assets/images/templates/${template.src}`)" :key="index" v-for="(template,index) in $store.state.editor.templates" :name="template.name"/>
            </template>
        </collapse>
    </div>
</template>
<style scoped>
#editor-sidebar {
    width: 20rem;
}
</style>