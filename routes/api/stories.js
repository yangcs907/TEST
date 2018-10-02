const router = require("express").Router();
const storyController = require("../../controllers/storyController");

router.route("/")
  .get(storyController.findAll)
  .post(storyController.create);


router
  .route("/:id")
  .get(storyController.findApproved)
  .put(storyController.update)
  .delete(storyController.remove);

  router.route("/storypage")
    .get(storyController.findApproved);

module.exports = router;
