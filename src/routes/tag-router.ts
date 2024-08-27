import {getSingleTag} from "../controllers/tag-controller/get-tag";
import {addTag} from "../controllers/tag-controller/add-tag";
import {updateTag} from "../controllers/tag-controller/update-tag";
import {deleteTag} from "../controllers/tag-controller/delete-tag";
import {getTags} from "../controllers/tag-controller/get-tags";

import express from "express";

const router =express.Router();

router.get("/tags",getTags);

router.post("/tags",addTag);

router.delete("/tags/:id",deleteTag);

router.patch("/tags/:id",updateTag);

router.get("/tags/:id",getSingleTag);



export default router;