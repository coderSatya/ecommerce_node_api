const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  const myData = await Product.find(queryObject);
  console.log(req.query);
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
    const {sort} = req.query;
    const queryObject = {};
    let apiData = Product.find(queryObject);
    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix)
    }
   
 const myData = await apiData
  res.status(200).json({myData})
};
module.exports = { getAllProducts, getAllProductsTesting };
