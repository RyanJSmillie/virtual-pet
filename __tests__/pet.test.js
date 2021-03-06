const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.age).toEqual(0);
      });

      it('has a initial hunger of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.hunger).toEqual(0);
      });

      it('has a initial fitness of 10', () => {
        const pet = new Pet('Fido');
    
        expect(pet.fitness).toEqual(10);
      });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });

    it('increases the hunger by 5', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
      });

      it('decreases the fitness by 3', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.fitness).toEqual(7);
      });

      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
      });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });

      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
      });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 4;
      pet.feed();
  
      expect(pet.hunger).toEqual(1);
    });

    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('fido');
    
        pet.hunger = 2;
        pet.feed();
    
        expect(pet.hunger).toEqual(0);
      });

      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
  });

  describe('checkUp', () => {
    it('return I am hungry', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 8;
      pet.fitness = 4;
  
      expect(pet.checkUp()).toEqual('I am hungry');
    });

    it('return I need a walk', () => {
        const pet = new Pet('fido');
    
        pet.hunger = 2;
        pet.fitness = 2;
    
        expect(pet.checkUp()).toEqual('I need a walk');
      });
 
      it('return I am hungry AND I need a walk', () => {
        const pet = new Pet('fido');
    
        pet.hunger = 6;
        pet.fitness = 2;
    
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
      });

      it('return I feel great!', () => {
        const pet = new Pet('fido');
    
        pet.hunger = 2;
        pet.fitness = 9;
    
        expect(pet.checkUp()).toEqual('I feel great!');
      });

      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
      });
  });


  describe('isAlive', () => {
    it('checks pet is Alive', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 4;
      pet.age = 15;
      pet.fitness = 6;
  
      expect(pet.isAlive).toEqual(true);
    });

    it('checks pet is Dead', () => {
        const pet = new Pet('fido');
    
        pet.hunger = 4;
        pet.age = 31;
        pet.fitness = 6;
    
        expect(pet.isAlive).toEqual(false);
      });

  });