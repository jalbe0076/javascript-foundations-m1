function createMaterial(name, unit, costPerUnit) {
  return {
    name: name, 
    unit: unit,
    costPerUnit: costPerUnit
  }
}

function calculateMaterialCost(material, totalUnits) {
  var totalCost = totalUnits * material.costPerUnit;
  return `${totalUnits} ${material.unit}s of ${material.name} costs $${totalCost}.`;
}

function createSupplyCloset(material) {
  var myCloset = {
    supplies: [] || []
  };
  if (material) {
    for (var i = 0; i < material.length; i++) {
      myCloset.supplies[i] = material[i].name;
    }
  }
  return myCloset;
}

function addSupply(myCloset, newMaterial) {
  if (!myCloset.supplies.includes(newMaterial.name)) {
    myCloset.supplies.push(newMaterial.name);
    return myCloset.supplies;
  } else {
    return `You already have ${newMaterial.name} in your closet!`;
  }
}

function createNewProject(material, status) {
  return {
    materialsNeeded: material,
    status: status || 'not started'
  }
}

function compareMaterials(project, materials) {
  for (var i = 0; i < project.materialsNeeded.length; i++) {
    if (!materials.supplies.includes(project.materialsNeeded[i].name)) {
      return 'Oh no! You need to go shopping before you can start this project!';
    }
  }
  return `Yay! You can start this project!`;
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}