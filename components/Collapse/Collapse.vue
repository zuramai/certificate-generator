<template>
    <div class="collapse">
        <div class="toggler">
            <a href="#" @click="toggle" class=" px-8 py-2 outline-none flex justify-between items-center">
                <slot name="name"></slot>
                <slot name="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                </slot>
            </a>
        </div>
        <div class="content px-8" ref="content" :style="{ display: !open ? 'none' : ''}">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        open: {
            default: false,
            type: Boolean
        }
    },
    data: () => ({
        counter: 0
    }),
    methods: {
        slideToggle(t,e,o) {0===t.clientHeight?this.j(t,e,o,!0):this.j(t,e,o)},
        slideUp(t,e,o){this.j(t,e,o)},
        slideDown(t,e,o){this.j(t,e,o,!0)},
        j(t,e,o,i){void 0===e&&(e=400),void 0===i&&(i=!1),t.style.overflow="hidden",i&&(t.style.display="block");var p,l=window.getComputedStyle(t),n=parseFloat(l.getPropertyValue("height")),a=parseFloat(l.getPropertyValue("padding-top")),s=parseFloat(l.getPropertyValue("padding-bottom")),r=parseFloat(l.getPropertyValue("margin-top")),d=parseFloat(l.getPropertyValue("margin-bottom")),g=n/e,y=a/e,m=s/e,u=r/e,h=d/e;window.requestAnimationFrame(function l(x){void 0===p&&(p=x);var f=x-p;i?(t.style.height=g*f+"px",t.style.paddingTop=y*f+"px",t.style.paddingBottom=m*f+"px",t.style.marginTop=u*f+"px",t.style.marginBottom=h*f+"px"):(t.style.height=n-g*f+"px",t.style.paddingTop=a-y*f+"px",t.style.paddingBottom=s-m*f+"px",t.style.marginTop=r-u*f+"px",t.style.marginBottom=d-h*f+"px"),f>=e?(t.style.height="",t.style.paddingTop="",t.style.paddingBottom="",t.style.marginTop="",t.style.marginBottom="",t.style.overflow="",i||(t.style.display="none"),"function"==typeof o&&o()):window.requestAnimationFrame(l)})},

        toggle() {
            // console.log(this.$refs)
            this.slideToggle(this.$refs.content, 200)
        }
    }
}
</script>
<style lang="scss" scoped>
.toggler a {
    color: mix(#5a67d8, #5c636d, 30%)
}
</style>