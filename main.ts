input.onGesture(Gesture.LogoDown, function () {
	
})
let pac_man = game.createSprite(2, 2)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
mamua.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    mamua.move(1)
    basic.pause(500)
    mamua.ifOnEdgeBounce()
})
