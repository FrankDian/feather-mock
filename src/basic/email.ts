import Basic from ".";

const email = function() {
  return `${Basic.string({min: 3, max: 10})}@${Basic.string({min: 3, max: 6})}.com`;
}

export default email;