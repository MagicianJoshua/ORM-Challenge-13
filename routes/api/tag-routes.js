const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const data = await Tag.findAll({include:Product} )
  return res.json(data);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const data = await Tag.findByPk(req.params.id, {include:Product} )
  return res.json(data);
});

router.post('/', async (req, res) => {
  // create a new tag
  const Data = await Tag.create(req.body); 
if (!Data) {
  return res.status(404).json({ message: 'formatting incorrect' });
}
return res.json(Data)
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

  const data = await Tag.findByPk(req.params.id);

  if (data) {
    await data.update(req.body);
    res.send({message:"Tag updated successfully"})
  }else {
    res.send({message:"Could not find Tag id"});
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const data = await Tag.findByPk(req.params.id)
  if (!data) {
    return res.status(404).json({message:"ID Not found"})
  }
  data.destroy();
  return res.json("Tag deleted");
});

module.exports = router;
