const itemService = require("../services/itemService");



// Get Items

exports.getAllItems = async (req, res) => {
    try {
      const items = await itemService.getAllItems();
      res.json({ data: items, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Post
  exports.postItems = async (req, res) => {
    try {
        const items = await itemService.postItems(req.body);
        res.json({ data: items, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };

  // Delete

  exports.deleteItems = async (req, res) => {
    try {
      const items = await itemService.deleteItems(req.params.id);
      res.json({ data: items, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   