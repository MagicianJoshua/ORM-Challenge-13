const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const data = await Category.findAll({include:Product});

  return res.json(data);
});

router.get('/:id', async (req, res) => {
  const data = await Category.findByPk(req.params.id, {include : Product})

  return res.json(data)
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  

// const userInfoString = JSON.stringify(userInfoObj)
const categoryData = await Category.create(req.body); 
if (!categoryData) {
  return res.status(404).json({ message: 'formatting incorrect' });
}
res.json(categoryData)
}
);

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const data = await Category.findByPk(req.params.id);

  if (Category) {
    await data.update(req.body);
    res.send({message:"Category updated successfully"})
  }else {
    res.send({message:"Could not find category id"});
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const data = await Category.findByPk(req.params.id)
  if (!data) {
    return res.status(404).json({message:"ID Not found"})
  }
  data.destroy();
  return res.json("Category deleted");
  
});

module.exports = router;
