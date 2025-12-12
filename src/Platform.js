import GameObject from './GameObject.js'

export default class Platform extends GameObject {
    constructor(game, x, y, width, height, color = '#f2e9e2ff') {
        super(game, x, y, width, height)
        this.color = color
    }

    draw(ctx) {
        // Rita plattformen
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        
        // Rita en enkel kant/skugga för att ge djup
        ctx.strokeStyle = '#93969cff'
        ctx.lineWidth = 2
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
}
