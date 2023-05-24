const cloudinary = require('cloudinary');
const router = require('express').Router();


cloudinary.config({
  cloud_name: 'diurnolvl',
  api_key: 329321364392126,
  api_secret: 'A1Xgd6PysCU5kDKzDw2lqUe6AFk'
})

router.delete('/:public_id', async (req, res) => {
  const { public_id } = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message)
  }
})


module.exports = router;
