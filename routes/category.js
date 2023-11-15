const express = require("express");
const router = express.Router();

//controller middlewares
const { create, articlesCount, listAll, remove, remove2, read, update } = require("../controllers/category");


//routes endpoints article
 router.post("/category", create);
// router.get("/articles/total", articlesCount);
// router.get("/articles/:count", listAll);
// router.patch("/articles/:slug", remove);
// router.delete("/articles/:slug", remove2);
// router.get("/articles/:slug", read);
// router.put("/articles/:slug", update);

module.exports = router;