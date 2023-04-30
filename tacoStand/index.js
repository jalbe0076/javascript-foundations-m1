const createIngredient = (name, price) => {
  return {
    name: name || 'unknown',
    price: price || 0.00
  };
}

const createTaco = (name, ingredients) => {
  return {
    name: name || 'custom',
    ingredients: ingredients || []
  };
};

const addIngredientToTaco = (taco, ingredient) => {
  taco.ingredients.push(ingredient);
  return taco;
}

const calculatePrice = taco => {
  const totalPrice = taco.ingredients.reduce((price, ingredient) => price += ingredient.price, 0);
  return totalPrice;
}

module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice
}
