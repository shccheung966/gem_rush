// This function defines the Fire module.
// - `ctx` - A canvas context for drawing
// - `x` - The initial x position of the fire
// - `y` - The initial y position of the fire
// - `color` - The colour of the gem
const Fire = function(ctx, x, y) {

    // This is the sprite sequences of the fire
    // `green`, `red`, `yellow` and `purple`.
    const sequences = {
        x: 0, y:  160, width: 16, height: 16, count: 7, timing: 200, loop: true
    };

    // This is the sprite object of the gem created from the Sprite module.
    const sprite = Sprite(ctx, x, y);

    // The sprite object is configured for the fire sprite here.
    sprite.setSequence(sequences)
          .setScale(2)
          .setXY(x,y)
          .setShadowScale({ x: 0.75, y: 0.2 })
          .useSheet("object_sprites.png");
          
    return {
        update: sprite.update,
        getXY: sprite.getXY,
        getBoundingBox: sprite.getBoundingBox,
        setXY: sprite.setXY,
        draw: sprite.draw
    };
};
