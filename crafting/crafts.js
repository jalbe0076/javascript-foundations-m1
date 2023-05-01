function createMaterial(name, unit, costPerUnit) {
  return {
    name: name, 
    unit: unit,
    costPerUnit: costPerUnit
  }
}

function calculateMaterialCost(material, totalUnits) {
  const totalCost = totalUnits * material.costPerUnit;
  return `${totalUnits} ${material.unit}s of ${material.name} costs $${totalCost}.`;
}

function createSupplyCloset(material) {
  const myCloset = {
    supplies: [] || []
  };
  if (material) {
    material.forEach(material => myCloset.supplies.push(material.name));
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
    let materialMissing = false;

    project.materialsNeeded.forEach(material => {
      if (!materials.supplies.includes(material.name)) {
        return materialMissing = true;
      }
    });

    if (materialMissing) {
      return 'Oh no! You need to go shopping before you can start this project!';
    } else {
      return `Yay! You can start this project!`;
    }
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}