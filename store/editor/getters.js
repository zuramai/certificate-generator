export default {
    templateImage(state) {
        if(state.template) {
            let image = new Image;
            image.src = state.template.src;
            
            return image;
        }
        return {};
    },
    templateImageStyle(state, getters) {
        let style = {
            backgroundImage: `url(${getters.templateImage.src})`,
            backgroundSize: 'contain'
        }

        if(state.template == null) {
            // Template not choosed
            return getters.gridBackground
        }else{
            // Template choosed
            return style
        }
    },
    gridBackground(state) {
        return {
            backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEyIEwgNDggMTIgTSAxMiAwIEwgMTIgNDggTSAwIDI0IEwgNDggMjQgTSAyNCAwIEwgMjQgNDggTSAwIDM2IEwgNDggMzYgTSAzNiAwIEwgMzYgNDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQ4IDAgTCAwIDAgMCA0OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")'
        }
    },
    elements(state) {
        return state.elements
    }
}