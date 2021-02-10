<template>
    <div id="editor-page">
        <editor-navbar></editor-navbar>
        <div class="editor-page-main bg-gray-100 h-screen">
            <editor-sidebar></editor-sidebar>
            <Nuxt/>
            <editor-rightbar></editor-rightbar>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>