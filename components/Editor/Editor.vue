<template>
    <div class="editor-wrapper">
        <div class="w-full md:w-1/2">
            <canvas id="editor"></canvas>
        </div>
    </div>
</template>
<script>
import Editor from './Editor';

export default {
    mounted() {
        const canvas = document.getElementById('editor');
        let editor = new Editor({el: canvas})
        editor.init()
        editor.render()
    }
}
</script>