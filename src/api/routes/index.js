const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/tracks", require("./track"));

module.exports = router;
 