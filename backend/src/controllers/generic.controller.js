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
  // removeModel
  return {
    getAllItems,
    postItem
  };
}
