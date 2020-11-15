export default class Editor {
    constructor({el}) {
        this.canvas = el;
        this.ctx = el.getContext('2d')
        this.imageChoosed = false;
    }

    init() {
        console.log('init canvas')
    }
    draw() {
        if(this.imageChoosed == false) this.drawBlank()
    }
    drawBlank() {
        // console.log('draw blank')
        let w = this.canvas.width/30;
        let h = this.canvas.height/30;
        for(let i = 0; i < 30; i++) {
            for(let j = 0; j < 30; j++) {
                if(i % 2 == 0 && j % 2 == 1) this.ctx.fillStyle = "#eee"
                else if(i % 2 == 1 && j % 2 == 0) this.ctx.fillStyle = "#eee"
                else this.ctx.fillStyle = "#fff"
                this.ctx.fillRect( j * w,i * h, w, h);
            }
        }
    }
    render() {
        this.draw();
        requestAnimationFrame(() => this.render());
    }
}