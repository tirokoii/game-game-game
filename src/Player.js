import GameObject from './GameObject.js'

export default class Player extends GameObject {
    constructor(game, x, y, width, height, color) {
        super(game, x, y, width, height)
        this.color = color
        this.hasBlinked = !this.hasBlinked

        // Nuvarande hastighet (pixels per millisekund)
        this.velocityX = 0
        this.velocityY = 0
        this.friction = 0.02
        this.acceleration = 0.02

        // Rörelsehastighet (hur snabbt spelaren accelererar/rör sig)
        this.moveSpeed = 0.3
        this.directionX = 0
        this.directionY = 0
    }

    update(deltaTime) {

        // Styr spelaren med piltangenterna
        if (this.game.inputHandler.keys.has('w')) {
            this.velocityY = -this.moveSpeed - this.acceleration
            console.log(this.velocityY)
            this.directionY = -1
        } else if (this.game.inputHandler.keys.has('s')) {
            this.velocityY = this.moveSpeed + this.acceleration
            this.directionY = 1
        } else {
            if (this.velocityY > 0) {
                this.velocityY -= this.friction
                if (this.velocityY < 0) {
                    this.velocityY = 0
                }
            } else if  (this.velocityY < 0) {
                this.velocityY += this.friction
                if (this.velocityY > 0) {
                    this.velocityY = 0
                }
            } else {
                this.velocityY = 0
            }
            this.directionY = 0
        }

        if (this.game.inputHandler.keys.has('a')) {
            this.velocityX = -this.moveSpeed - this.acceleration
            this.directionX = -1
        } else if (this.game.inputHandler.keys.has('d')) {
            this.velocityX = this.moveSpeed + this.acceleration
            this.directionX = 1
        } else {
            if (this.velocityX > 0) {
                this.velocityX -= this.friction
                if (this.velocityX < 0) {
                    this.velocityX = 0
                }
            } else if  (this.velocityX < 0) {
                this.velocityX += this.friction
                if (this.velocityX > 0) {
                    this.velocityX = 0
                }
            } else {
                this.velocityX = 0
            }
            this.directionX = 0
        }

        // stoppar spelaren från att gå utanför canvas
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x + this.width > this.game.width) {
            this.x = this.game.width - this.width
        }
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y + this.height > this.game.height) {
            this.y = this.game.height - this.height
        }
        
        // Uppdatera position baserat på hastighet
        this.x += this.velocityX * deltaTime
        this.y += this.velocityY * deltaTime

        // Rita pupiller (fungerar ej)
        // if (!this.hasBlinked) {
        //     ctx.fillStyle = 'black'
        //     ctx.fillRect(
        //     this.x + this.width * 0.25 + this.directionX * this.width * 0.05, 
        //     this.y + this.height * 0.25 + this.directionY * this.width * 0.05, 
        //     this.width * 0.1, 
        //     this.height * 0.1
        //     )
        // }
    }

    draw(ctx) {
        // Rita spelaren som en rektangel
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

        // Rita ögon
        ctx.fillStyle = 'white'
        ctx.fillRect(this.x + this.width * 0.2, this.y + this.height * 0.2, this.width * 0.2, this.height * 0.2)
        ctx.fillRect(this.x + this.width * 0.6, this.y + this.height * 0.2, this.width * 0.2, this.height * 0.2)

        // Rita pupiller
        ctx.fillStyle = 'black'
        ctx.fillRect(
        this.x + this.width * 0.25 + this.directionX * this.width * 0.05, 
        this.y + this.height * 0.25 + this.directionY * this.width * 0.05, 
        this.width * 0.1, 
        this.height * 0.1
        )
        ctx.fillRect(
            this.x + this.width * 0.65 + this.directionX * this.width * 0.05, 
            this.y + this.height * 0.25 + this.directionY * this.width * 0.05, 
            this.width * 0.1, 
            this.height * 0.1
        )

        // rita mun som ett streck
        // ctx.strokeStyle = 'black'
        // ctx.lineWidth = 2
        // ctx.beginPath()
        // ctx.moveTo(this.x + this.width * 0.3, this.y + this.height * 0.65)
        // ctx.lineTo(this.x + this.width * 0.7, this.y + this.height * 0.65)
        // ctx.stroke()

        // Rita näsa
        ctx.fillStyle = "darkred"
        ctx.beginPath()
        ctx.arc(this.x + this.width * 0.3, this.y + this.height * 0.4, 10, 0, Math.PI/2)
        ctx.fill()

        // Rita mun
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(this.x + this.width * 0.5, this.y + this.height * 0.4, 17, Math.PI/4, Math.PI)
        ctx.fill()

        // Rita Ögonbryn
        ctx.fillStyle = "black"
        ctx.fillRect(
            this.x + this.width *0.2 + this.directionX * this.width * 0.01, 
            this.y + this.height * 0.2 + this.directionY * this.width * 0.008, 
            this.width * 0.6, 
            this.height * 0.07)

    }
}