import express from "express";
import {
  createSong,
  listSongs,
  updateSong,
  removeAllSongs,
  deleteSong,
  getTotalSongCount,
  getAggregated,
} from "../controllers/songController";

const router = express.Router();

router.post("/createSong", createSong);
router.get("/", listSongs);
router.put("/:id", updateSong);
router.delete("/removeAll", removeAllSongs);
router.delete("/:id", deleteSong);
router.get("/songCount", getTotalSongCount);
router.get("/aggregated", getAggregated);
export default router;
