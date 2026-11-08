import { model } from "mongoose";

export default function genericController(Model, options = {}) {
  console.log("🔥 GENERIC CONTROLLER INITIALIZED");
  console.log("🔥 Generic Controller Rescived This options ", options);

  // This object is dedicated in order to create a swithc between getAllItems and get single item
  //If you look coler to the syntax you wil lsee that in this case swithc helps to select one single option
  //thus in this case it is possilbe to select an option that either send an array to frointend
  //or send a single object to the frontend
  //The key factor here is that Model.find() Always returns an array regardless of the quantity of elements inside
  //If you have only one object in the DB it will still return Array Thus you need to use Model.findOne()
  //Or you should use Array methods in the frontned whcih seems not right

  const { getAll = true, getOne = false } = options;

  // at this case we use a single if operatior to manifest the logic above
  //#1 :

  //getAllModels Syntax
  //this syntax is dedicated to get all the data form the selected collection in the DB
  const getAllItems = getAll
    ? async (req, res) => {
        try {
          const items = await Model.find();
          console.log("Get All items is here");
          return res.json(items);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    : undefined;

  //#2 :
  const getSingelItem = getOne
    ? async (req, res) => {
        try {
          const singeItem = await Model.findOne();
          console.log("GetOne is here");
          return res.json(singeItem);
          if (!singeItem) {
            return res.status(404).json({ message: "Item not found" });
          }
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }
    : undefined;

  //Get Item by Id sytnax
  //This is a dedecoated syntax to fins odmething in the backedn by usinf an ide of and object
  const getById = async (req, res) => {
    try {
      const itemID = req.params.id;

      const itemById = await Model.findById(itemID);

      if (!itemById) {
        return res.status(404).json({ message: "Item not found" });
      }

      return res.status(200).json(itemById);
    } catch (error) {
      return res.status(500).json({ message: error.message });
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
    getById,
    getSingelItem,
    postItem,
    updateItem,
    removeItem
  };
}
