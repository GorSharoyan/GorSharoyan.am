export default function genericController(Model) {
  //getAllModels Syntax
  //this syntax is dedicated to get all the data form the selected collection in the DB
  const getAllItems = async (req, res) => {
    try {
      const items = await Model.find();
      return res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //postItem Sytnax
  //This sytnax is dedicated to get data from Frontend and add it to DB
  const postItem = async (req, res) => {
    console.log("post item request", req.body);

    try {
      const items = await Model.create(req.body);
      console.log("Created item:", items);
      return res.status(201).json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // updateModel
  const updateItem = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedBody = req.body;
      console.log(updatedBody);

      const item = await Model.findByIdAndUpdate(id, updatedBody, {
        new: true
      });
      res.status(200).json(updatedBody);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // removeModel
  const removeItem = async (req, res) => {
    try {
      const id = req.params.id;
      const deletedItem = await Model.findByIdAndDelete(id);
      if (!deletedItem) {
        return res.status(404).json({
          message: "Item Not Found"
        });
      }

      res.status(200).json({
        message: "Item deleted successfully",
        Item: deletedItem
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  return {
    getAllItems,
    postItem,
    updateItem,
    removeItem
  };
}
