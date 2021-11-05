import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("GET: /");
});
router.post("/", (req, res) => {
  res.status(201).send("POST: /");
});

router.put("/:id", (req, res) => {
  res.status(201).send("PUT: /:id");
});
router.delete("/:id", (req, res) => {
  res.send("DELETE: /:id");
});

export default router;
