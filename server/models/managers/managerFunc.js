let Manager = require("./Manager");
/*
{
  name: 'XYZ Properties,
  properties: [{}, {}]
}
*/
/*
{
  name: 'XYZ Properties,
  properties: ['212312312Adasda12', 'asdacbr23123fw3f3c',
 'g3h345t34rfwfwef']
}
*/


module.exports = {
  getAll: () => {
    return Manager.find({});
  },
  deleteManager: (managerID) => {
    return Manager.findByIdAndDelete(managerID);
  },
  editManager: (managerID, updatedValues) => {
    return Manager.findByIdAndUpdate(managerID, updatedValues);
  },
  createManager: (newManager) => {
    return Manager.create(newManager);
  },
};
