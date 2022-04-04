const MAXIMUM_FITNESS = 10;
const WALK_FITNESS = 4;
const FEED_HUNGER = 3;
const MIN_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }
}

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if ((this.fitness + WALK_FITNESS) <= MAXIMUM_FITNESS) {
        this.fitness += WALK_FITNESS;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
     } else if((this.hunger - FEED_HUNGER) >= MIN_HUNGER) {
        this.hunger -= FEED_HUNGER;
    } else {
        this.hunger = MIN_HUNGER
    }
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if ((this.fitness <= 3) && (this.hunger >= 5)) {
        return 'I am hungry AND I need a walk'
    } else if ((this.fitness <= 3)) {
        return 'I need a walk'
    } else if ((this.hunger >= 5)) {
        return 'I am hungry'
    } else {
        return 'I feel great!'
    }
}

module.exports = Pet;
