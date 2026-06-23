export default function genericController(Model) {
  //getAllModels Syntax
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

  // createModel
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
  return {
    getAllItems,
    postItem,
    updateItem
  };
}
