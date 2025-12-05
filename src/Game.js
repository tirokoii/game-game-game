import Rectangle from './Rectangle.js'
import Circle from './Circle.js'
import InputHandler from './InputHandler.js'

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.elaspedTime = 0
        
        this.inputHandler = new InputHandler(this)
        
        // Skapa alla objekt i spelet
        this.gameObjects = [
            new Rectangle(this, 0, 400, 900, 100, 'green'),
            new Circle(this, 500, 300, 100, 0, Math.PI*2, 'yellow'),
            new Circle(this, 450, 280, 10, 0, Math.PI*2, 'black')
        ]
    }

    update(deltaTime) {
        // Uppdatera spelet utifrån deltaTime
        this.elaspedTime += 1
        this.gameObjects.forEach(obj => obj.update(deltaTime))

        // Exempel på input-hantering, detta bör hanteras av rektanglarna själva
        if (this.inputHandler.keys.has('r')) {
            this.gameObjects[0].velocityX += 0.001 * deltaTime
        }
        if (this.inputHandler.keys.has('b')) {
            this.gameObjects[1].velocityY -= 0.001 * deltaTime
        }
    }

    draw(ctx) {
        // Rita alla spelobjekt
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText(`Tid: ${(this.elapsedTime / 1000).toFixed(2)} s`, 10, 30);

        this.gameObjects.forEach(obj => obj.draw(ctx))
    }
}