import { Router } from "express";
import { addProducts, getProducts } from "../controllers/productControllers.js";
import cors from "cors";

const productRoutes = Router();

const allowedOrigins = ["http://localhost:5173", "http://localhost:5175"];

productRoutes.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      // Check if the origin is in the allowed origins array
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

productRoutes.route("/shop").get(getProducts);
productRoutes.route("/addproduct").post(addProducts);

export default productRoutes;
