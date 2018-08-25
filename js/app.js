// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 5) {
        this.x = -1;
    } else {
      this.x += this.speed * dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Hero {
    constructor() {
        this.sprite = 'images/char-horn-girl.png';
        this.x = 2;
        this.y = 4;
    }

    update() {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    handleInput(key) {
        switch(key) {
            case 'left':
              this.x = this.x > 0 ? this.x - 1 : this.x;
              break;
            case 'up':
              this.y = this.y > 0 ? this.y - 1 : this.y;
              break;
            case 'down':
              this.y = this.y < 5 ? this.y + 1 : this.y;
              break;
            case 'right':
              this.x = this.x < 4 ? this.x + 1 : this.x;
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];

const enemy = new Enemy(-1, 0, 3);
const enemy2 = new Enemy(-1, 1, .5);
const enemy3 = new Enemy(-1, 2, 1);
allEnemies.push(enemy, enemy2, enemy3);

// Place the player object in a variable called player
const player = new Hero();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
