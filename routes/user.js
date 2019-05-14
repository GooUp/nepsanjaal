const express = require("express");
const {
  userById,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUser,
  userPhoto
} = require("../controllers/user");
const { requireSignin, hasAuthorization } = require("../controllers/auth");

const router = express.Router();

router.get("/users", getAllUsers);

router.get("/user/photo/:userId", userPhoto);

router
  .route("/user/:userId")
  .get(requireSignin, getUserById)
  .put(requireSignin, hasAuthorization, updateUserById)
  .delete(requireSignin, hasAuthorization, deleteUser);


// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
