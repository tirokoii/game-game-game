export default class InputHandler {
    constructor(game) {
        this.game = game
        this.keys = new Set()
        this.jumpCancel = 0

        window.addEventListener('keydown', (event) => {
            if (event.repeat) return
            console.log(event.key)
            this.keys.add(event.key)
        })
        window.addEventListener('keyup', (event) => {
            if (event.key == ' ') {
                this.jumpCancel = 1
                console.log("let go")
            }
            this.keys.delete(event.key)
        })
    }
}