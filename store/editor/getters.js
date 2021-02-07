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
            height: getters.templateImage.height+'px'
        }
        console.log(style);
        return getters.templateImage ? style : {}
    }
}