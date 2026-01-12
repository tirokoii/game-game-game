import GameObject from './GameObject.js'

export default class Coin extends GameObject {
    constructor(game, x, y, size = 20, value = 10, color) {
        super(game, x, y, size, size)
        this.size = size
        this.color = "#bae1ff"
        this.value = value // Poäng för detta mynt

        this.colorIndex = 0
        this.colorSpectrum = [
            "#ffb3ba",
            "#ffdfba", 
            "#ffffba",
            "#baffc9",
            "#bae1ff"
        ]

        // Bob animation
        this.bobOffset = 0
        this.bobSpeed = 0.002 // hur snabbt myntet gungar
        this.bobDistance = 20 // hur långt upp/ner myntet rör sig
    }
    
    colorChange() {
        console.log("Eyo")
        setTimeout(() => {
            this.color = this.colorSpectrum[this.colorIndex]
            this.colorIndex += 1
            if (this.colorIndex > this.colorSpectrum.length) {
                this.colorIndex = 0
            }
        }, 2000)
    }

    update(deltaTime) {
        // Gungar myntet upp och ner
        this.bobOffset += this.bobSpeed * deltaTime
    }


    draw(ctx) {
        // Beräkna y-position med bob
        const bobY = Math.cos(this.bobOffset) * this.bobDistance
        // Rita myntet som en cirkel
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x + this.size / 2, this.y + this.size / 2 + bobY, this.size / 2, 0, Math.PI * 2)
        ctx.fill()
    }
}
