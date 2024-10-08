"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const bike_validation_1 = require("./bike.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../User/user.constant");
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(bike_validation_1.BikeValidations.createBikeValidationSchema), bike_controller_1.BikeControllers.createBike);
router.get("/", bike_controller_1.BikeControllers.getAllBikes);
router.get("/:id", bike_controller_1.BikeControllers.getSingleBike);
router.put("/:id", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(bike_validation_1.BikeValidations.updateBikeValidationSchema), bike_controller_1.BikeControllers.updateBike);
router.delete("/:id", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), bike_controller_1.BikeControllers.deleteBike);
exports.BikeRoutes = router;
