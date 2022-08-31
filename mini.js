const theMainShip = new shipOne("USS Assembly");
const invaderShipOne = new invaderShip("One");
const invaderShipTwo = new AlienShip("Two");
const invaderShipThree = new AlienShip("Three");

class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name,
        this.hull = hull,
        this.firepower = firepower, 
        this.accuracy = accuracy
    }
}

// -------------
class shipOne extends Ship {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy);
    this.name = " ",
    this.hull = 20,
    this.firepower = 5,
    this.accuracy = .7,
    this.attackInvader = this.attackInvader.bind(this);
    }

    attackInvader(target) {
    if (this.hull >= 0) {
    this.attackInvader();
    console.log("Alien Destroyed!");
    }
}
// --------alien ships------

class invaderShip extends Ship {
    constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy)
    this.name = name,
    this.hull = (Math.floor(Math.random() * 3) + 3), 
    this.firepower = (Math.floor(Math.random() * 2) + 2),
    this.accuracy =  (Math.floor(Math.random()* .2) + .6)
    this.attackShipOne = this.attackShipOne.bind(this)
   }

   attackShipOne(target) {
    if (this.hull >= 0) {
    this.attackShipOne();
    console.log("Human Ship Destroyed!");
      }
}


  btn.addEventListener('click', () => {
    shipOne.attackinvaderShip();
  })

  let btn = document.getElementById('play-button');
  let clickbox = document.getElementById('clickbox');
  let game = ['Play', 'Retreat',
  'Continue Game', 'Game Over'];

  btn.addEventListener('click', function(){
      let gameBegin = game[Math.floor(Math.random() * game.length)]
      clickbox.innerHTML = gameBegin;
  })