export default {
    changeTemplate(state, template) {
        state.template = template;
    },
    clearActiveElements(state) {
        state.elements.forEach(el => {
            el.active = false
        });
    },
    addElement(state, element) {
      
        // Options that every element have
        element = {
            ...element,
            active: true,
            position: {
                x: 100,
                y: 100,
            },  
            stroke: {
                show: false,
                color: 'black',
                type: 'solid',
                width: 1,
                dashoffset: 0,
            },
            style: {
                fill: 'none',
                gradient: null,
                
                rounded: false,
                shadow: false,
                stroke: false,
                glass: false,
                sketch: false,
            }   
        }

        state.elements.push(element)
    },
    setActiveElement(state, indexEl) {
        state.elements[indexEl].active = true;
    }
}