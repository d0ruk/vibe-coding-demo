import { Request, Response } from "express";
import { BookService } from "../services/BookService";

export const BookController = {
  async createBook(req: Request, res: Response) {
    const {
      isbn,
      title,
      publication_date,
      edition,
      available_quantity,
      price,
      authorId,
      publisherId,
    } = req.body;
    const book = await BookService.createBook({
      isbn,
      title,
      publication_date,
      edition,
      available_quantity,
      price,
      authorId,
      publisherId,
    });
    res.status(201).json(book);
  },

  async deleteBook(req: Request, res: Response) {
    const { isbn } = req.params;
    await BookService.deleteBook(isbn);
    res.status(204).send();
  },

  async updateBook(req: Request, res: Response) {
    const { isbn } = req.params;
    const updates = req.body;
    const book = await BookService.updateBook(isbn, updates);
    res.status(200).json(book);
  },

  async listBooks(req: Request, res: Response) {
    const books = await BookService.listBooks();
    res.status(200).json(books);
  },

  async getBook(req: Request, res: Response) {
    const { isbn } = req.params;
    const book = await BookService.getBook(isbn);
    res.status(200).json(book);
  },
};
