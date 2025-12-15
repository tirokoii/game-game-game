import GameObject from "./GameObject"

export default class Platform extends GameObject {
    constructor(game, x, y, width, height, color = '#f2e9e2ff') {
        super(game, x, y, width, height)
        this.color = color
    }

    update(deltaTime) {
        this.height -= 0.1 * deltaTime
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