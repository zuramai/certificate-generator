<template>
    <div class="editor-wrapper p-5" @wheel="zoomCanvas">
        <div class="editor-canvas bg-white shadow-md" ref="editor" :style="{...templateImageStyle, ...additionalStyles}">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class='main-svg'>
            <g v-for="(element, index) in elements" :key="index">
                <template v-if="element.type == 'text'">
                    <g @click="setActiveElement(index)" @mouseenter="" :style="{cursor: 'move'}">
                        <text :x="element.position.x" 
                            :y="element.position.y"
                            >
                            {{element.text.content}}
                        </text>
                        <g id="box">
                            <rect :width="element.size.width" 
                                :height="element.size.height" 
                                v-bind:stroke="element.stroke.color" 
                                :stroke-width="element.stroke.width"
                                :fill="element.style.fill" 
                                :x="element.position.x" 
                                :y="element.position.y - element.size.height"></rect>
                        </g>
                    </g>
                </template>
            </g>
            <template v-if="activeElements.length > 0">
                <g id="controls" v-for="(activeElement,index) in activeElements" :key="`control-${index}`">
                    <g>
                        <!-- Top Left -->
                        <image :x="activeElement.position.x - 15"
                            :y="activeElement.position.y - activeElement.size.height - 15"
                            xlink:href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+"
                            style="cursor:nwse-resize"
                            @pointerdown="resize(index, $event)"
                        />
                    </g>
                    <g>
                        <image :x="activeElement.position.x - 15"
                            :y="activeElement.position.y "
                            xlink:href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+"
                            style="cursor:ne-resize"
                            ></image>
                    </g>
                    <g>
                        <image :x="activeElement.position.x + activeElement.size.width"
                            :y="activeElement.position.y "
                            xlink:href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+"
                            style="cursor:nwse-resize"
                        ></image>
                    </g>
                    <g>
                        <image :x="activeElement.position.x + activeElement.size.width"
                            :y="activeElement.position.y - activeElement.size.height - 15"
                            xlink:href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+"
                            style="cursor:ne-resize"
                        />
                    </g>
                    <!-- <g>
                        <rect :width="activeElement.size.width" 
                            :height="activeElement.size.height" 
                            v-bind:stroke="activeElement.stroke.color" 
                            :stroke-width="activeElement.stroke.width"
                            :fill="activeElement.style.fill" 
                            :x="activeElement.position.x" 
                            :y="activeElement.position.y - activeElement.size.height"></rect>
                    </g> -->
                </g>
            </template>
        </svg>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    mounted() {
        this.isMounted = true;
    },
    data: () => ({
        isMounted: false
    }),
    methods: {
        toggleElementHover() {

        },
        resize(event, indexEl) {

        },
        setActiveElement(index) {
            this.$store.commit('editor/setActiveElement',index)
        },
        zoomCanvas($event) {
            let editor = this.$refs.editor;

            let width = editor.clientWidth;
            let height = editor.clientHeight;
            let step = 150; // in percent %

            console.log('awal ', $event)

            let aspectRatio = height/width;
            let sizeChange = (mode) => {
                let widthChange =  step
                let heightChange =  (step * height/width)

                return {
                    width: mode == 'out' ? -widthChange : widthChange,
                    height: mode == 'out' ? -heightChange : heightChange,
                }
            }

            if($event.ctrlKey) {
                $event.preventDefault()
                if($event.deltaY < 0) {
                    console.log('size change ', sizeChange('in'))
                    editor.style.width = `${width + sizeChange('in').width}px`
                    editor.style.height = `${height + sizeChange('in').height}px`
                } else {
                    console.log('size change ', sizeChange('out'))
                    editor.style.width = `${width + sizeChange('out').width}px`
                    editor.style.height = `${height + sizeChange('out').height}px`
                }
            }
        }
    },
    computed: {
        // Get current template image
        ...mapGetters({
            activeElements: 'editor/activeElements',
            elements: 'editor/elements',
            templateImage:'editor/templateImage',
            templateImageStyle:'editor/templateImageStyle'
        }),

        additionalStyles() {
            if(!this.isMounted)
                return {};
            
            let aspectRatio = this.templateImage.height / this.templateImage.width;
            let height = this.$refs.editor.clientWidth * aspectRatio;
            console.log(height)
            return {
                height: `${height}px`
            }

        }
    }
}
</script>
<style scoped>
.editor-wrapper {
    inset: 4rem 16rem 0 20rem;
    position: absolute;
    overflow: auto;
}
.editor-canvas {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEyIEwgNDggMTIgTSAxMiAwIEwgMTIgNDggTSAwIDI0IEwgNDggMjQgTSAyNCAwIEwgMjQgNDggTSAwIDM2IEwgNDggMzYgTSAzNiAwIEwgMzYgNDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQ4IDAgTCAwIDAgMCA0OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=");
    background-repeat: repeat;
    height: 550px
}
.main-svg {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: block;
    min-width: 800px;
    min-height: 1416px;
    position: absolute;
    background-image: none;
}
</style>