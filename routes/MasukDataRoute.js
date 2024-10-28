import express from "express";
import {
  getMasukData,
  getMasukDatabyId,
  createMasukData,
  updateMasukData,
  deleteMasukData,
  updateHargaDiharapkan,
} from "../controller/MasukData.js";

const router = express.Router();
router.get("/masuk-data", getMasukData);
router.get("/masuk-data/:id", getMasukDatabyId);
router.post("/masuk-data", createMasukData);
router.patch("/masuk-data/:id", updateMasukData);
router.patch("/masuk-data/harga/:id", updateHargaDiharapkan);
router.delete("/masuk-data/:id", deleteMasukData);

export default router;
