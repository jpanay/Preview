let Manager = require("./Manager");

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
