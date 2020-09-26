// # STORY

// Abdulkareem is a 35 year old man, that lives in Riyadh.He has a wife and 3 children.As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

// Abdulkareem has a horse, named Adel.The horse is 15 years old and has the color brown.Usually the horse eats grass or helps transport materials for Abdulkareem.

// And they lived happily ever after!

class Creature {
  constructor(name, age, kind, job) {
    this.name = name;
    this.age = age;
    this.kind = kind;
    this.job = job;
  }
  get info() {
    return `${this.name} is a ${this.age} years old ${this.kind},`;
  }
}

//////////////
class Person extends Creature {
  constructor(name, age, kind, job, city, partner, children) {
    super(name, age, kind, job);
    this.city = city;
    this.partner = partner;
    this.children = children;
  }

  get doSo() {
    return `${this.info} lives in ${this.city}. He ${this.partner} and ${this.children} childeren ${this.name} is a ${this.job}`;
  }
}

///////////////
class Animal extends Creature {
  constructor(name, age, kind, job, color) {
    super(name, age, kind, job);
    this.color = color;
  }
  get doSo() {
    return `${this.info} and has a color ${this.color},${this.job}`;
  }
}

let abdulkareem = new Person(
  'Abdulkareem',
  35,
  'man',
  'construction worker, that makes houses he likes to eat dates and smoke water pipe.',
  'Riyadh',
  'has a wife',
  3,
);

let adel = new Animal(
  'Adel',
  15,
  'horse',
  ' Usually eats grass or helps transport materials for Abdulkareem.',
  'brown',
);

console.log(
  `${abdulkareem.doSo}

${adel.doSo}

And they lived happily ever after!`,
);
