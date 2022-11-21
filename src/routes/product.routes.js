import { Router } from "express";
import { methods as languageController } from "../controllers/product.controller";

const router = Router();

router.get("/", languageController.getProducts);
router.get("/:id", languageController.getProduct);
router.post("/", languageController.addProduct);
router.put("/:id", languageController.updateProduct);
router.delete("/:id", languageController.deleteProduct);

export default router;
