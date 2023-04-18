function createMeal(name, specialRequests, tableNumber) {
  return {
    name: name,
    specialRequests: specialRequests,
    tableNumber: tableNumber,
    complete: false
  }
}

function getMade(meal) {
  meal.complete = true;
  return meal;
}

function announceMeal(meal) {
  if (meal.complete === true) {
    return `Order up - ${meal.name} for table ${meal.tableNumber}!`;
  } else {
    return `This ${meal.name} is not completed yet`;
  }
} 

function createOrder(tableMeals) {
  return {
    tableNumber: tableMeals.name,
    meals: tableMeals.meals,
    completedMeals: []
  }
}

function cookMeal(order, meal) {
      if (!order.completedMeals.includes(meal) && order.tableNumber === meal.tableNumber) {
      order.completedMeals.push(meal.name)
    }
  return order;
}

function listOrders(orders) {
  var orderList = [];
  for (var i = 0; i < orders.meals.length; i++) {
    orderList.push(orders.meals[i].name);
  }
  return orderList;
}

function listSpecialRequests(order) {
  var specialRequests = [];
  for (var i = 0; i < order.meals.length; i++) {
    for (var j = 0; j < order.meals[i].specialRequests.length; j++) {
      specialRequests.push(order.meals[i].specialRequests[j])
    }
  }
  return specialRequests;
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
