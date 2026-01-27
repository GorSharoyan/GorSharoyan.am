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
  // getModelByID
  // createModel
  // updateModel
  // removeModel
  return {
    getAllItems
  };
}
