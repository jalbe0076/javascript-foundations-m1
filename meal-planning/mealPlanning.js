const createMeal = (type, calorieGoal) => {
  return {
    type,
    calorieGoal,
    dishes: []
  };
}

const addDish = (meal, type) => {
  if (meal.calorieGoal > type.calories) {
    meal.dishes.push(type);
    meal.calorieGoal -= type.calories;
  }
  return meal;
}

const calculateCalories = dish => {
  const totalCalories = dish.dishes.reduce((totalCalories, dish) => totalCalories += dish.calories, 0);
  return `${dish.type} has a total of ${totalCalories} calories.`;
}

module.exports = {
  createMeal,
  addDish,
  calculateCalories
}