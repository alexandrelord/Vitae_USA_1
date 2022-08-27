// —————————————————————————————————————————————————————————————————————————————
// Challenge: Context chain
// —————————————————————————————————————————————————————————————————————————————
// Complete the function `createContext`.
//
// The function must support two signatures:
//
//   function createContext(data?: object): Context;
//   function createContext(parent?: Context, data?: object): Context;
//
// —————————————————————————————————————————————————————————————————————————————
// Hint: There must be some kind of inheritance in JavaScript…
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// —————————————————————————————————————————————————————————————————————————————

/**
 * @typedef {object} Context
 */

/**
 * Creates a new context or inherits a parent one.
 *
 * If no parent context is specified, the function must return a context
 * object.
 *
 * If a parent context is specified, the function must return a child context
 * object. The child context gives access to its parent properties.
 *
 * Optionally, `data` can specified and merged into this context.
 *
 * @param {Context|object} [parentOrData] An optional parent context or data
 * @param {object} [data] An optional set of properties to define
 * @returns {Context} The child context
 */const biker = {
  isMoving: false,
  printIntroduction: function() {
    console.log(`The bike is a ${this.bike}. Am I in motion!? ${this.isMoving}`);
  }
};

const motion = Object.create(biker);

motion.bike = 'Roadbike'; // "Bike" is a property set on "motion", but not on "biker"
motion.isMoving = true; // inherited properties can be overwritten

motion.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

export const createContext = (parent, data) => {
  const context = Object.create(parent);
  Object.assign(context, data);
  return context;
};

