class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
    
    exercise() {
      console.log(`${this.name} says, "Running is fun! - said no one ever."`);
    }
    
    fetchJob() {
      console.log(`${this.name} is a ${this.job}.`);
    }
  }
  
  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
    
    completeTask() {
      this.busy = false;
    }
    
    acceptNewTask() {
      this.busy = true;
    }
    
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
    
    learnLanguage(language) {
      this.languages.push(language);
    }
    
    listLanguages() {
      console.log(`${this.name} knows ${this.languages.join(', ')}.`);
    }
  }
  
  // Example usage:
  const john = new Person('John', 'teacher', 32);
  john.exercise(); // prints "John says, "Running is fun! - said no one ever.""
  john.fetchJob(); // prints "John is a teacher."
  
  const mark = new Programmer('Mark', 'developer', 28, ['JavaScript', 'Python']);
  mark.completeTask();
  mark.offerNewTask(); // prints "Mark would love to take on a new responsibility."
  mark.acceptNewTask();
  mark.offerNewTask(); // prints "Mark can't accept any new tasks right now."
  mark.learnLanguage('Java');
  mark.listLanguages(); // prints "Mark knows JavaScript, Python, Java."
  