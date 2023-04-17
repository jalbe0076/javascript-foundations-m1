function createCustomer(name, bill, bookings) {
  return {
    name: name,
    bill: bill,
    bookings: bookings || [] 
  }
}

function greeting(customer) {
  if (!customer.bookings.length) {
    return `${customer.name}! Welcome to Happy Spa`;
  } else {
    return `${customer.name}! Welcome back to Happy Spa`;
  }
}

function createService(service, cost) {
  if (!service || !cost) {
    return 'Please provide service name and cost.';
  } else {
    return {
      name: service,
      cost: cost
    }
  }
}

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill += service.cost;
  return customer;
}

function applyGiftCard(allServices, cost) {
  var affordableServices = [];
  for (var i = 0; i < allServices.length; i++) {
    if (allServices[i].price <= cost) {
      affordableServices.push(allServices[i].name);
    }
  }
  return affordableServices;
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
