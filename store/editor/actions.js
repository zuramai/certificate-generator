export default {
    /**
     * Change the template used
     * @param {*} param0 The context
     * @param {object} template Template object
     */
    chooseTemplate({commit,state}, template) {
        commit('changeTemplate', template)
    },

    /**
     * Add an element to canvas
     * @param type
     * @returns {string} 
     */
    addElement({commit},type) {
        if(type == 'text') {
            commit('addElement', {
                type: 'text',
                text: {
                    fontSize: 12,
                    content: 'Text',
                    bold: false,
                    italic: false,
                    underline: false,
                    font: 'Arial',
                    align: 'center',
                    textColor: 'black',
                    backgroundColor: 'transparent',
                    borderColor: 'transparent'
                },
                size: {
                    width: 40,
                    height: 20
                }
            });
        }
        console.log('added elemnent')
    }
}