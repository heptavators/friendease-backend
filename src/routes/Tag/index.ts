import { Router } from 'express';
import { TagController } from "../../controllers/Tag";
import { TagRepository } from "../../repositories/Tag";
import { TagService } from "../../services/Tag";

const TagRouter = Router();

const tagRepository = new TagRepository();
const tagService = TagService.getInstance(tagRepository);

const tagController = new TagController(tagService);

TagRouter.get("/tag", async (req, res) => tagController.GetAllTagController(req, res));

export default TagRouter