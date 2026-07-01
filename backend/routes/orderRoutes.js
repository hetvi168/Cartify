const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");
const { createOrder, getOrders, getMyOrder,updateOrderStatus} = require("../controller/orderController");

const router = express.Router();

router.route("/").get(protect, admin, getOrders).post(protect, createOrder);
//specific order
router.route("/:id/status").put(protect, admin, updateOrderStatus);
router.route("/myorders").get(protect,getMyOrder);

module.exports = router;
