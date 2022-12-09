const Item = require ('../models/Item');


exports.getAllItems = async () => {
    return await Item.find();
  };
exports.postItems = async (items) => {
    return await Item.create(items);
  };
exports.deleteItems = async (id) => {
    return await Item.findByIdAndDelete(id);
  };