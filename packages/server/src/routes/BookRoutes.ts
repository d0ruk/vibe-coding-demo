import { Router } from "express";
import { BookController } from "../controllers/BookController";

const router = Router();

router.post("/books", BookController.createBook);
router.delete("/books/:id", BookController.deleteBook);
router.put("/books/:id", BookController.updateBook);
router.get("/books", BookController.listBooks);
router.get("/books/:id", BookController.getBook);

export default router;
